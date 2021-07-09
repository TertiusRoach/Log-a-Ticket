require.config({
  waitSeconds: 120,
  //   urlArgs: window['i4key'],
  baseUrl: '../',
  paths: {
    jquery: ['libs/jquery/3.6.0/3.6.0.min'],
    start: ['index'],
  },
});

require.onError = (err) => {
  debugger;
};
require(['jquery', 'start'], function (jquery, prog) {
  prog.ticketSystem.Start();
}, function (err) {
  if (console && console.log) {
    console.trace();
    console.error(err);
  }
});
