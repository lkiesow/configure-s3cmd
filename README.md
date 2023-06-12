# GitHub Action to configure s3cmd

This action makes it easy to create a configuration file for s3cmd.


## Usage


```yaml
- uses: lkiesow/matrix-notification@v1
  with:
    # The Matrix home server to send the message to
    # Default: matrix.org
    server: matrix.org

    # Hostname of the S3 server
    host: s3.example.com

    # The access key
    access_key: access-key

    # The secret key
    secret_key: secret
```
