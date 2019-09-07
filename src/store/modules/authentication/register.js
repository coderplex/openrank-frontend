import HTTP from '../../../http';

export default {
  namespaced: true,
  strict: true,
  state: {
    name: '',
    email: '',
    password: '',
    passwordConfirmed: '',
    successMsg: '',
  },
  mutations: {
    setName(state, name) {
      state.name = name;
    },
    setEmail(state, email) {
      state.email = email;
    },
    setPassword(state, password) {
      state.password = password;
    },
    setPasswordConfirmed(state, passwordConfirmed) {
      state.passwordConfirmed = passwordConfirmed;
    },
    setSuccessMsg(state, message) {
      state.successMsg = message;
    },
  },
  actions: {
    async register({
      commit,
      state: {
        name,
        email,
        password,
        // eslint-disable-next-line camelcase
        passwordConfirmed: password_confirmed,
      },
    }) {
      await HTTP().post('/users', {
        name,
        email,
        password,
        password_confirmed,
      }).then(({ data: { message } }) => {
        commit('setSuccessMsg', message);
      });
    },
  },
};