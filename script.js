console.log('hello world ✌️');

if (window.location.protocol == 'http:') {
  console.log(
    'you are accessing us via ' +
      'an insecure protocol (HTTP). ' +
      'Redirecting you to HTTPS.'
  );

  window.location.href = window.location.href.replace('http:', 'https:');
}
