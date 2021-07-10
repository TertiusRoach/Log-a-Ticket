require.config({
  waitSeconds: 120,
  //   urlArgs: window['i4key'],
  baseUrl: '../',
  paths: {
    jquery: ['jquery/3.6.0/3.6.0.min.js'],
    start: ['index'],
  },
});

require.onError = (err) => {
  debugger;
};
require(['jquery', 'start'], function (_jquery, prog) {
  prog.TicketSystem.startProgram();
}, function (err) {
  if (console && console.log) {
    console.trace();
    console.error(err);
  }
});
