interface LogProps {
  message: string
}

function log({ message }: LogProps): string {
  console.log(message)
  return message
}

log({ message: 'Hello' })
