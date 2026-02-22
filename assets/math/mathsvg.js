MathJax = {
    tex: {inlineMath: [['$', '$'], ['\\(', '\\)']]},
    output: {
      displayAlign: 'left'
    },
    options: {
      menuOptions: {
        settings: {
          enrich: false,   // enrichment causes problems with the toggle
        }
      }
    },
    startup: {
      async pageReady() {
        //
        //  Do the usual startup (which does a typeset).
        //  When that is all done, un-hide the page.
        //
        await MathJax.startup.defaultPageReady();
        document.getElementById("hidden").disabled = true;
      }
    }
 };