/**
 * Please provide all your functions in this file.
 * Consider using extending built-in objects.
 */

"use strict";

/**
 * A URL PARSER
 * This function analyses an url.
 * Please refer to the "https://de.wikipedia.org/wiki/Uniform_Resource_Locator"
 */
function analyseUrl(pUrl) {
    let analyseResult = {
        host: null,
        query: null,
        schema: null,
        fragment: null
    }

    // I extract to schema from the URL ... 
    analyseResult.schema = pUrl.slice(0, pUrl.indexOf("://"));

    /* I exract to host from URL ... I want to use slice method ... so firstly I have to find the start position ... For slice method i will find the start position with pUrl.indexOf method ... below you can see how I found .... pay attention the 7 .... there are two ":" symbolls and i dont want to start with first one , and say the method find the last one.... but there is another condition about this situation that if the URL includes "#" symbolls.  
     */
    if (pUrl.includes(":", 7) == true) {
        analyseResult.host = pUrl.slice(pUrl.indexOf("//") + 2, pUrl.indexOf(":", 7));

    } else if (pUrl.includes("/", 10)) {
        analyseResult.host = pUrl.slice(pUrl.indexOf("//") + 2, pUrl.indexOf("/", 10));
    } else if (pUrl.includes("?")) {
        analyseResult.host = pUrl.slice(pUrl.indexOf("//") + 2, pUrl.indexOf("?"));
    } else if (pUrl.includes("#")) {
        analyseResult.host = pUrl.slice(pUrl.indexOf("//") + 2, pUrl.indexOf("#"));
    } else {
        analyseResult.host = pUrl.slice(pUrl.indexOf("//") + 2);
    }

    /*       
    port
    */
    if (pUrl.includes(":", 10)) {
        if (pUrl.includes("/", 10)) {
            analyseResult.port = pUrl.slice(pUrl.indexOf(":", 10) + 1, pUrl.indexOf("/", 10));
        } else if (pUrl.includes("?")) {
            analyseResult.port = pUrl.slice(pUrl.indexOf(":", 10) + 1, pUrl.indexOf("?"));
        } else if (pUrl.includes("#")) {
            analyseResult.port = pUrl.slice(pUrl.indexOf(":", 10) + 1, pUrl.indexOf("#"));
        } else {
            analyseResult.port = pUrl.slice(pUrl.indexOf(":", 10) + 1);
        }
    }

    /*
    path
    */
    if (pUrl.includes("/", 10)) {
        if (pUrl.includes("?")) {
            analyseResult.path = pUrl.slice(pUrl.indexOf("/", 10) + 1, pUrl.indexOf("?"));
        } else if (pUrl.includes("#")) {
            analyseResult.port = pUrl.slice(pUrl.indexOf("/", 10) + 1, pUrl.indexOf("#"));
        } else {
            analyseResult.port = pUrl.slice(pUrl.indexOf("/", 10) + 1);
        }
    }


    /* I want to find query ... all gueries start with "?" symboll... So I will start with If and i will write as condition inside "if" it is true that there is "?" inside pUrl.... and then if there is one, and then i will use "if" and 'else' ... first 'if' says that query ends with "#" and else says that query doesnt end with anything.
     */
    if (pUrl.includes("?")) {
        if (pUrl.includes("#")) {
            analyseResult.query = pUrl.slice(pUrl.indexOf("?") + 1, pUrl.indexOf("#"));
        } else {
            analyseResult.query = pUrl.slice(pUrl.indexOf("?") + 1);
        }
    }

    if (pUrl.includes("#")) {
        analyseResult.fragment = pUrl.slice(pUrl.indexOf("#") + 1);
    }



    return analyseResult;
}

/* */
