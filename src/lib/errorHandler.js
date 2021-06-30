/**
 * This code snippet handles any un-handled errors from occuring in the consumer iframe.
 * This is a global event handler that will capture all the error messages and log them to the console.
 * Once the error is logged to the console this onerror event handler will suppress the script error from surfacing on the UI,
 * avoiding an interruption to the user experience by not displaying a script error.
 *
 * Reason for this change : In some cases when the xfc library is used in a nested iframe architecture, it results in a situation
 * where if the outer iframe is cleared quick enough to force a re-load then postMessages from the nested iFrame result in script
 * errors during reload.
 */

/* eslint no-console: 0 */

if (window && !window.onerror) {
  window.onerror = (message, source, lineno, colno, error) => {
    console.group();
    console.log('Error handled in Consumer iframe :');
    console.log('Message :', message);
    console.log('Source :', source);
    console.log('Line no :', lineno);
    console.log('Column no :', colno);
    console.log('Error stack :', error.stack ? error.stack : '');
    console.groupEnd();
    return true;
  };
}
