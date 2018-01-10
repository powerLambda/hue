ace.define("ace/mode/solr_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,s=function(){var e="AND|OR|NOT|TO|NOW|HOUR|HOURS|DAY|DAYS|MONTH|MONTHS|YEAR|YEARS",t="ABS|AVG|CHILDFIELD|DEF|DIST|DIV|DOCFREQ|EQ|EXISTS|FIELD|GT|GTE|HLL|HSIN|IDF|IF|LINEAR|LOG|LT|LTE|MAP|MAX|MAX|MAXDOC|MIN|MIN|MS|MUL|NORM|NUMDOCS|ORD|PAYLOAD|PERCENTILE|POW|PRODUCT|QUERY|RECIP|RORD|SCALE|SQEDIST|SQRT|STDDEV|STRDIST|SUB|SUM|SUM|SUMSQ|SUMTOTALTERMFREQ|TERMFREQ|TF|TOP|TOTALTERMFREQ|UNIQUE|VARIANCE|XOR",n=this.createKeywordMapper({"support.function":t,keyword:e},"identifier",!0);this.$rules={start:[{token:"string",regex:'".*?"'},{token:"string",regex:"'.*?'"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:n,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:'\\+|\\-|\\/|\\?|&|\\^|~|:|\\*|\\||!|"|\\[|\\]'},{token:"paren.lparen",regex:"[\\(]"},{token:"paren.rparen",regex:"[\\)]"},{token:"text",regex:"\\s+"}]},this.normalizeRules()};s.metaData={fileTypes:["solr"],name:"Solr",scopeName:"source.solr"},r.inherits(s,i),t.SolrHighlightRules=s}),ace.define("ace/mode/solr",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/solr_highlight_rules"],function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("./text").Mode,s=e("./solr_highlight_rules").SolrHighlightRules,o=function(){this.HighlightRules=s};r.inherits(o,i),function(){this.$id="ace/mode/solr",this.getCompletions=function(e,t,n,r){var i=this.$keywordList||this.$createKeywordList();return i.map(function(e){return{ignoreCase:!1,name:e,value:e,upperCaseValue:e.toUpperCase(),score:1,meta:"keyword"}})}}.call(o.prototype),t.Mode=o})