const I="data:text/markdown;base64,IyMgMC4xNC4xCi0gYWRkIGxvbmdlciBydW4gdGltZSBmb3IgYSB0ZXN0IGNhc2UgdGhhdCB0YWtlcyBsb25nZXIgdG8gcnVuCgojIyAwLjE0LjAKIyMjIE5ldyBGZWF0dXJlcwotIHRoZXJlIGlzIG5vdyBhIGNvbnNvbGUhCgojIyAwLjEzLjEKLSB0aGUgYWJvdXQgcGFnZSBub3cgcG9pbnRzIHRvIHRoZSBnaXRodWIgcGFnZQotIG1vdmUgdHV0b3JpYWwubWQgdG8gcm9vdCBvZiByZXBvCgojIyAwLjEzLjAKLSBUaGUgZ2FsbGVyeSAvIGV4YW1wbGVzIGNhbiBub3cgYmUgdmlldyBpbiB0aGUgVUkgdmlhIHRoZSBHYWxsZXJ5IGluIHRoZSBuYXZpZ2F0aW9uCgojIyAwLjEyLjAKIyMjIE5ldyBGZWF0dXJlcwotIHVzZXJzIGNhbiBub3cgYWRkIGNkbiBsaW5rcyB0byB0aGVpciBza2V0Y2hlcyEgCi0gU2ltcGx5IGNsaWNrICdza2V0Y2gnIGFuZCAnYWRkIGNkbicsIHBhc3RlIGluIGEgY2RuIGxpbmsgKGxpa2UgQ2hyb21hLmpzKSBhbmQgY2xpY2sgJ2FkZCcKLSBUaGUgY2hyb21hIGxpYnJhcnkgaXMgbm93IGF2YWlsYWJsZSBmb3IgdXNlIQojIyMgUGF0Y2hlcwotIGFkZCB0cnktY2F0Y2ggY2xhdXNlIHdoZW4gaW5zdGFudGlhdGluZyBgbmV3IHA1KClgCgojIyAwLjExLjAKLSByZXN0eWxlZCB0aGUgVUkgd2l0aCBDaGFrcmEgVUkKIyMjIE5ldyBGZWF0dXJlcwotIGFkZGVkIGEgJ3NrZXRjaCcgZHJvcGRvd24gbWVudSB0byBuYXZiYXIgd2hlcmUgc3RhcnQgYW5kIHN0b3AgaXMgYWxzbyBhdmFpbGFibGUKCiMjIDAuMTAuMAojIyMgTmV3IEZlYXR1cmVzCi0gU3RhcnQgYW5kIFN0b3Aga2V5bWFwcyBhZGRlZCEgQWx0K0VudGVyIHRvIHN0YXJ0IGEgc2tldGNoIGFuZCBBbHQrU2hpZnQrRW50ZXIgdG8gc3RvcAogCiMjIDAuOS4wCi0gYWRkZWQgY2hhbmdlbG9nIHRvIHRoZSB3ZWIgZWRpdG9yIGZvciB1c2VycyB0byB0cmFjayBjaGFuZ2VzCgojIyAwLjguNgotIGFkZGVkIGAubm9kZS12ZXJzaW9uYCBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIFJlbmRlcgogCiMjIDAuOC41CiMjIyBDb2RlIENoYW5nZXMKLSB3cml0ZSBpbnRlZ3JhdGlvbiB0ZXN0IGZvciB0aGUgYXBwIGNvbXBvbmVudHMgd2l0aCBQdXBwZXRlZXIKIyMjIEJ1ZyBGaXhlcwotIFtjNzRhMzk4XShodHRwczovL2dpdGh1Yi5jb20vc29tZWNoby9wNS1jbGpzLXdlYi1lZGl0b3IvY29tbWl0L2M3NGEzOThiZTVhZGYwOTk0ZGUxNjlkYzk4Zjc0ZDczYzY2YWYxNzMpIHJ1bm5pbmcgYSB2YWxpZCBza2V0Y2ggYWZ0ZXIgcnVubmluZyBhbiBpbnZhbGlkIHNrZXRjaCAoWyMzNV0oaHR0cHM6Ly9naXRodWIuY29tL3NvbWVjaG8vcDUtY2xqcy13ZWItZWRpdG9yL2lzc3Vlcy8zNSkpIG5vdyBwcm9kdWNlcyBhIHZhbGlkIGNhbnZhcwotIFswNmNmMzI4XShodHRwczovL2dpdGh1Yi5jb20vc29tZWNoby9wNS1jbGpzLXdlYi1lZGl0b3IvY29tbWl0LzA2Y2YzMjhiYzM4YjQ5NjY5ZTE2NmIyY2NjYzllNzBiNjlkY2U1ZDkjZGlmZi05YjIzNmIxOTM3ZmY1ZjA1YTZiNWZjM2YyZTg2MTc2ODRiZjE5ZDk2MWI1MGM0NDUyOTY4NGQ3MDY1MWRjNTkyUjQzKSBhIHNrZXRjaCB3aWxsIG5vdCBiZSBjcmVhdGVkIHdoZW4gdGhlIHVzZXIncyBjb2RlIGRvZXMgbm90IGNvbXBpbGUKCiMjIDAuOC40CiMjIyBDb2RlIENoYW5nZXMKLSByZWZhY3RvciBjb2RlIGZvciB0ZXN0YWJpbGl0eSBhbmQgbGVzcyBtdXRhYmlsaXR5CgojIyAwLjguMwojIyMgQ29kZSBDaGFuZ2VzCi0gc2V0dXAgSmVzdCBmb3IgdGVzdGluZwoKIyMgMC44LjAKIyMjIEJyZWFraW5nIENoYW5nZXMKLSBza2V0Y2hlcyBub3cgdXNlIGRlZmxhdGUgY29tcHJlc3Npb24uIE9sZCBza2V0Y2hlcyB3aWxsIGJyZWFrIHdoZW4gc2hhcmVkLgoKIyMgMC43LjIKIyMjIENvZGUgQ2hhbmdlcwotIHVzaW5nIG5ldyBjbGpzLWNvbXBpbGVyLWNvbXBpbGVyIGJ1aWxkLCB3aGljaCByZXR1cm5zIGFueSBlcnJvcnMgZW5jb3VudGVyZWQKLSBpZiBlcnJvciBpcyBlbmNvdW50ZXJlZCwgcHJldmVudCBza2V0Y2ggZnJvbSBzdGFydGluZyBhbmQgcHJpbnQgZXJyb3IgdG8gY29uc29sZQoKIyMgMC43LjEKIyMjIENvZGUgQ2hhbmdlcwotIG1vdmUgYXJ0aWNsZSByZWxhdGVkIGNzcyB0byBjdXN0b20gY29tcG9uZW50cwogCiMjIDAuNy4wCiMjIyBOZXcgRmVhdHVyZXMKLSBwNSBzdHJ1Y3R1cmUgYW5kIGV2ZW50IGZ1bmN0aW9ucyBsaWtlIHByZWxvYWQsIG1vdXNlQ2xpY2tlZCwgdG91Y2hTdGFydGVkIGFyZSBub3cgYXZhaWxhYmxlCiMjIyBDb2RlIENoYW5nZXMKLSBmdW5jdGlvbmFsaXR5IHJlbGF0ZWQgdG8gcDUgYW5kIHNrZXRjaCBpcyBtb3ZlZCB0byAvc3JjL2xpYi9wNQotIGx6LXN0cmluZyBpcyBtb3ZlZCB0byAvc3JjL2xpYi9MWlN0cmluZwojIyMgQnVnIEZpeGVzCi0gZml4IHJlcGVhdGVkIGltcG9ydCBvZiBwNSB3aGljaCBjYXVzZXMgd2FybmluZyBpbiBjb25zb2xlCgojIyAwLjYuMAojIyMgQnJlYWtpbmcgQ2hhbmdlcwotIHNrZXRjaGVzIG5vdyB1c2UgTFpTdHJpbmcgY29tcHJlc3Npb24gZm9yIFVSTCBlbmNvZGluZy4gT2xkIHNrZXRjaGVzIHdpbGwgYnJlYWsgd2hlbiBzaGFyZWQuIAo=";export{I as default};
