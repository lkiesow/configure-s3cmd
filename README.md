# GitHub Action to configure s3cmd

This action makes it easy to create a configuration file for s3cmd.


## Usage


```yaml
- uses: lkiesow/configure-s3cmd@v1
  with:
    # Hostname of the S3 server
    host: s3.example.com

    # The access key
    access_key: access-key

    # The secret key
    secret_key: secret
```
