import api from './api';
import vars from './vars';

api.listen(vars.api.port, async () => {
  console.log(`running on port ${vars.api.port}`);
});
