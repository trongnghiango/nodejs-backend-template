const log = require('logger')
const expressApp = require('@servers/expressApp')

expressApp.listen(1337, () =>
  log.info('Server is running ...', { context: 'startUp' }),
)
