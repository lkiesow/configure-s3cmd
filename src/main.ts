import * as core from '@actions/core'
import * as fs from 'fs'
import * as os from 'os'

async function run(): Promise<void> {
  try {
    const host: string = core.getInput('host')
    const access_key: string = core.getInput('access_key')
    const secret_key: string = core.getInput('secret_key')

    const config = `
	 	host_base = ${host}
		host_bucket = ${host}
		bucket_location = us-east-1
		use_https = True
		access_key = ${access_key}
		secret_key = ${secret_key}
		signature_v2 = False
	 `.replace(/\n[\t ]+/g, '\n')

    const home = os.homedir()
    fs.writeFileSync(`${home}/.s3cfg`, config)
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message)
    }
  }
}

run()
