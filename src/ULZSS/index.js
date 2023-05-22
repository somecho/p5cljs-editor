//
//	ULZSS  -- A Data Compression Program for UTF8 string
//
var ULZSS = {};
ULZSS.Window = function(input){
    this.buffer = input;
    this.offset = - ULZSS.N;
    this.current = 0;
    this.size = this.buffer.length;
    this.hash = {};
};
ULZSS.MAX_LEN = 17;
ULZSS.MIN_LEN = 1;
ULZSS.MIN_BYTE = 2;
ULZSS.N = 4096;
ULZSS.NN = 4096 - 0x20;
ULZSS.M = 2 * ULZSS.N;

ULZSS.Window.prototype = {
    next: function(){
	if (this.current == this.size){
	    return false
	}
	if (this.search()){
	    for(var i = 0; i < this.match_len; i++){
		this.insert_hash();
		this.current ++;
	    }
	    this.flag = true
	} else {
	    this.flag = false;
	    this.insert_hash();
	    this.current ++;
	}
	if (this.current > this.offset + ULZSS.N){
	    this.update();
	}
	return true
    },
    search: function(){
	var key = this.buffer.charCodeAt(this.current);
	this.match_len = this.match_pos = 0
	var d;
	if (d = this.hash[key]){
	    for(var i = 0; i < d.length; i++){
		var pos = d[i];
		var real_pos = this.offset + pos;
		if (this.current - real_pos >= ULZSS.NN){
		    continue;
		}
		var j = 0;
		var b = 0;
		while (this.buffer.charCodeAt(real_pos + j) == this.buffer.charCodeAt(this.current + j) &&
		       j < ULZSS.MAX_LEN){
		    b += ULZSS.charSize(this.buffer.charCodeAt(real_pos + j));
		    j ++;
		}
		if( j > ULZSS.MIN_LEN && b > ULZSS.MIN_BYTE && j > this.match_len){
		    this.match_len = j;
		    this.match_pos = this.current - real_pos;
		}
		//alert([j, b, this.match_len]);
	    }
	    if (this.match_len != 0){
		return true;
	    } else {
		return false;
	    }
	} else {
	    return false;
	}
    },
    insert_hash: function(){
	var code = this.buffer.charCodeAt(this.current);
	if (!this.hash[code]) {
	    this.hash[code] = [];
	}
	this.hash[code].push(this.current - this.offset);
    },
    update: function(){
	var new_hash = {};
	for (var key in this.hash){
	    var d = this.hash[key];
	    var c = false;
	    for(var i = 0; i < d.length; i++){
		if(d[i] > ULZSS.N){
		    if(!c){
			new_hash[key] = [];
			c = true;
		    }
		    new_hash[key].push(d[i] - ULZSS.N);
		}
	    }
	}
	this.offset += ULZSS.N;
	this.hash = new_hash;
    },
    previous_char: function(){
	return this.buffer.charAt(this.current - 1);
    }
}

ULZSS.encode = function(input){
    var window = new ULZSS.Window(input);
    var body = "";
    var buffer = "";
    var flag = 0;
    var mask = 1;
		var s =""
    while (window.next()){
	if (window.flag){
	    flag |= mask;
	    var code = window.match_pos + 
		(window.match_len - ULZSS.MIN_LEN - 1) * 4096;
	    buffer += String.fromCharCode(code + 0x20);
	} else {
	    buffer += window.previous_char();
	}
	mask <<= 1;
	if (mask == 0x40){
	    mask = 1;
	    s = flag + 0x20;
	    body += String.fromCharCode(s);
	    body += buffer;
	    buffer = "";
	    flag = 0;
	}
    }
    if (mask != 1){
	s = flag + 0x20
	body += String.fromCharCode(s);
	body += buffer
    }
    return body
}


ULZSS.decode = function(input){
    var size = input.length;
    var i = 1;
    var current = 0;
    var output = "";
    var mask = 0;
    var flag = input.charCodeAt(0) - 0x20;
    var count = 0;
    while (i < size) {
	if (flag & 1 == 1){
	    var code = input.charCodeAt(i) - 0x20;
	    var match_len = Math.floor(code / 4096) + ULZSS.MIN_LEN + 1;
	    var match_pos = code % 4096;
	    //alert([match_pos, match_len, code]);
	    var j = 0, p = current;
	    var k = 0;
	    while(k < match_len){
		output += output.charAt(current - match_pos + k);
		k ++;
	    }
	    current += match_len;
	    i ++;
	} else {
	    output += input.charAt(i);
	    i ++;
	    current ++;
	}
	count ++;
	if(count == 6 && i < size){
	    flag = input.charCodeAt(i) - 0x20;
	    i ++;
	    count = 0;
	}else{
	    flag >>= 1
	}
    }
    return output;
}

ULZSS.charSize = function(c){
    if(c <= 0x7F){
	return 1;
    } else if(c > 0x7FF){
	return 3;
    } else {
	return 2;
    }
}

export { ULZSS }
