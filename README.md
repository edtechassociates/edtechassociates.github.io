# edtechassociates.github.io
Primary informational and marketing site for EdTech.


# HTTPS
https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/&v=3

https://help.github.com/articles/adding-a-cname-file-to-your-repository/&v=3

We used the above 2 links as walkthroughs to get our DNS redirect setup. We had issues where HTTPS *won't* work seemingly at all. This seems to be a problem acting between Github Pages and a DNS redirect. So for the time being, our only connections are HTTP based.

# CNAME
We had to create a CNAME file for the redirect to work.

#ANAME, ALIAS, A RECORD
I created @, www, and * records for both of these IPs...

192.30.252.153
192.30.252.154
