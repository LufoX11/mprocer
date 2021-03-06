(function ($) {
  $.fn.jqte = function (options) {
    var varsTitle = [{
      title: "Text Format"
    },
    {
      title: "Font Size"
    },
    {
      title: "Color"
    },
    {
      title: "Bold",
      hotkey: "B"
    },
    {
      title: "Italic",
      hotkey: "I"
    },
    {
      title: "Underline",
      hotkey: "U"
    },
    {
      title: "Ordered List",
      hotkey: "."
    },
    {
      title: "Unordered List",
      hotkey: ","
    },
    {
      title: "Subscript",
      hotkey: "down arrow"
    },
    {
      title: "Superscript",
      hotkey: "up arrow"
    },
    {
      title: "Outdent",
      hotkey: "left arrow"
    },
    {
      title: "Indent",
      hotkey: "right arrow"
    },
    {
      title: "Justify Left"
    },
    {
      title: "Justify Center"
    },
    {
      title: "Justify Right"
    },
    {
      title: "Strike Through",
      hotkey: "K"
    },
    {
      title: "Add Link",
      hotkey: "L"
    },
    {
      title: "Remove Link"
    },
    {
      title: "Cleaner Style",
      hotkey: "Delete"
    },
    {
      title: "Horizontal Rule",
      hotkey: "H"
    },
    {
      title: "Source"
    }];
    var formats = [
      ["p", "Normal"],
      ["h1", "Header 1"],
      ["h2", "Header 2"],
      ["h3", "Header 3"],
      ["h4", "Header 4"],
      ["h5", "Header 5"],
      ["h6", "Header 6"],
      ["pre", "Preformatted"]
    ],
      fsizes = ["10", "12", "16", "18", "20", "24", "28"],
      colors = ["0,0,0", "68,68,68", "102,102,102", "153,153,153", "204,204,204", "238,238,238", "243,243,243", "255,255,255", null, "255,0,0", "255,153,0", "255,255,0", "0,255,0", "0,255,255", "0,0,255", "153,0,255", "255,0,255", null, "244,204,204", "252,229,205", "255,242,204", "217,234,211", "208,224,227", "207,226,243", "217,210,233", "234,209,220", "234,153,153", "249,203,156", "255,229,153", "182,215,168", "162,196,201", "159,197,232", "180,167,214", "213,166,189", "224,102,102", "246,178,107", "255,217,102", "147,196,125", "118,165,175", "111,168,220", "142,124,195", "194,123,160", "204,0,0", "230,145,56", "241,194,50", "106,168,79", "69,129,142", "61,133,198", "103,78,167", "166,77,121", "153,0,0", "180,95,6", "191,144,0", "56,118,29", "19,79,92", "11,83,148", "53,28,117", "116,27,71", "102,0,0", "120,63,4", "127,96,0", "39,78,19", "12,52,61", "7,55,99", "32,18,77", "76,17,48"],
      linktypes = ["Web Address", "E-mail Address", "Picture URL"],
      vars = $.extend({
        'status': true,
        'css': "jqte",
        'title': true,
        'titletext': varsTitle,
        'button': "OK",
        'format': true,
        'formats': formats,
        'fsize': true,
        'fsizes': fsizes,
        'funit': "px",
        'color': true,
        'linktypes': linktypes,
        'b': true,
        'i': true,
        'u': true,
        'ol': true,
        'ul': true,
        'sub': true,
        'sup': true,
        'outdent': true,
        'indent': true,
        'left': true,
        'center': true,
        'right': true,
        'strike': true,
        'link': true,
        'unlink': true,
        'remove': true,
        'rule': true,
        'source': true,
        'placeholder': false,
        'br': true,
        'p': true,
        'change': "",
        'focus': "",
        'blur': ""
      }, options);
    $.fn.jqteVal = function (value) {
      $(this).closest("." + vars.css).find("." + vars.css + "_editor").html(value)
    };
    var thisBrowser = navigator.userAgent.toLowerCase();
    if (/msie [1-7]./.test(thisBrowser)) vars.title = false;
    var buttons = [];

    function addParams(name, command, key, tag, emphasis) {
      var thisCssNo = buttons.length + 1;
      return buttons.push({
        name: name,
        cls: thisCssNo,
        command: command,
        key: key,
        tag: tag,
        emphasis: emphasis
      })
    }
    addParams('format', 'formats', '', '', false);
    addParams('fsize', 'fSize', '', '', false);
    addParams('color', 'colors', '', '', false);
    addParams('b', 'Bold', 'B', ["b", "strong"], true);
    addParams('i', 'Italic', 'I', ["i", "em"], true);
    addParams('u', 'Underline', 'U', ["u"], true);
    addParams('ol', 'insertorderedlist', '¾', ["ol"], true);
    addParams('ul', 'insertunorderedlist', '¼', ["ul"], true);
    addParams('sub', 'subscript', '(', ["sub"], true);
    addParams('sup', 'superscript', '&', ["sup"], true);
    addParams('outdent', 'outdent', '%', ["blockquote"], false);
    addParams('indent', 'indent', '\'', ["blockquote"], true);
    addParams('left', 'justifyLeft', '', '', false);
    addParams('center', 'justifyCenter', '', '', false);
    addParams('right', 'justifyRight', '', '', false);
    addParams('strike', 'strikeThrough', 'K', ["strike"], true);
    addParams('link', 'linkcreator', 'L', ["a"], true);
    addParams('unlink', 'unlink', '', ["a"], false);
    addParams('remove', 'removeformat', '.', '', false);
    addParams('rule', 'inserthorizontalrule', 'H', ["hr"], false);
    addParams('source', 'displaysource', '', '', false);
    return this.each(function () {
      if (!$(this).data("jqte") || $(this).data("jqte") == null || $(this).data("jqte") == "undefined") $(this).data("jqte", true);
      else $(this).data("jqte", false);
      if (!vars.status || !$(this).data("jqte")) {
        if ($(this).closest("." + vars.css).length > 0) {
          var editorValue = $(this).closest("." + vars.css).find("." + vars.css + "_editor").html(),
            thisElementAttrs = "";
          $($(this)[0].attributes).each(function () {
            if (this.nodeName != "style") thisElementAttrs = thisElementAttrs + " " + this.nodeName + '="' + this.nodeValue + '"'
          });
          var thisElementTag = $(this).is("[data-origin]") && $(this).attr("data-origin") != "" ? $(this).attr("data-origin") : "textarea",
            createValue = '>' + editorValue;
          if (thisElementTag == "input" || thisElementTag == "option") {
            editorValue = editorValue.replace(/"/g, '&#34;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            createValue = 'value="' + editorValue + '">'
          }
          var thisClone = $(this).clone();
          $(this).data("jqte", false).closest("." + vars.css).before(thisClone).remove();
          thisClone.replaceWith('<' + thisElementTag + thisElementAttrs + createValue + '</' + thisElementTag + '>')
        }
        return
      }
      var thisElement = $(this),
        thisElementTag = $(this).prop('tagName').toLowerCase();
      $(this).attr("data-origin", thisElementTag);
      var thisElementVal = $(this).is("[value]") || thisElementTag == "textarea" ? $(this).val() : $(this).html();
      thisElementVal = thisElementVal.replace(/&#34;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
      $(this).after('<div class="' + vars.css + '"></div>');
      var jQTE = $(this).next('.' + vars.css);
      jQTE.html('<div class="' + vars.css + "_toolbar" + '" role="toolbar" unselectable></div><div class="' + vars.css + '_linkform" style="display:none" role="dialog"></div><div class="' + vars.css + "_editor" + '"></div>');
      var toolbar = jQTE.find('.' + vars.css + "_toolbar"),
        linkform = jQTE.find('.' + vars.css + "_linkform"),
        editor = jQTE.find('.' + vars.css + "_editor"),
        emphasize = vars.css + "_tool_depressed";
      linkform.append('<div class="' + vars.css + '_linktypeselect" unselectable></div><input class="' + vars.css + '_linkinput" type="text/css" value=""><div class="' + vars.css + '_linkbutton" unselectable>' + vars.button + '</div> <div style="height:1px;float:none;clear:both"></div>');
      var linktypeselect = linkform.find("." + vars.css + "_linktypeselect"),
        linkinput = linkform.find("." + vars.css + "_linkinput"),
        linkbutton = linkform.find("." + vars.css + "_linkbutton");
      linktypeselect.append('<div class="' + vars.css + '_linktypeview" unselectable></div><div class="' + vars.css + '_linktypes" role="menu" unselectable></div>');
      var linktypes = linktypeselect.find("." + vars.css + "_linktypes"),
        linktypeview = linktypeselect.find("." + vars.css + "_linktypeview"),
        setdatalink = vars.css + "-setlink";
      editor.after('<div class="' + vars.css + '_source ' + vars.css + '_hiddenField"></div>');
      var sourceField = jQTE.find("." + vars.css + "_source");
      thisElement.appendTo(sourceField);
      if (thisElementTag != "textarea") {
        var thisElementAttrs = "";
        $(thisElement[0].attributes).each(function () {
          if (this.nodeName != "type" && this.nodeName != "value") thisElementAttrs = thisElementAttrs + " " + this.nodeName + '="' + this.nodeValue + '"'
        });
        thisElement.replaceWith('<textarea ' + thisElementAttrs + '>' + thisElementVal + '</textarea>');
        thisElement = sourceField.find("textarea")
      }
      editor.attr("contenteditable", "true").html(thisElementVal);
      for (var n = 0; n < buttons.length; n++) {
        if (vars[buttons[n].name]) {
          var buttonHotkey = buttons[n].key.length > 0 ? vars.titletext[n].hotkey != null && vars.titletext[n].hotkey != "undefined" && vars.titletext[n].hotkey != "" ? ' (Ctrl+' + vars.titletext[n].hotkey + ')' : '' : '',
            buttonTitle = vars.titletext[n].title != null && vars.titletext[n].title != "undefined" && vars.titletext[n].title != "" ? vars.titletext[n].title + buttonHotkey : '';
          toolbar.append('<div class="' + vars.css + '_tool ' + vars.css + '_tool_' + buttons[n].cls + '" role="button" data-tool="' + n + '" unselectable><a class="' + vars.css + '_tool_icon" unselectable></a></div>');
          toolbar.find('.' + vars.css + '_tool[data-tool=' + n + ']').data({
            tag: buttons[n].tag,
            command: buttons[n].command,
            emphasis: buttons[n].emphasis,
            title: buttonTitle
          });
          if (buttons[n].name == "format" && $.isArray(vars.formats)) {
            var toolLabel = vars.formats[0][1].length > 0 && vars.formats[0][1] != "undefined" ? vars.formats[0][1] : "";
            toolbar.find("." + vars.css + '_tool_' + buttons[n].cls).find("." + vars.css + "_tool_icon").replaceWith('<a class="' + vars.css + '_tool_label" unselectable><span class="' + vars.css + '_tool_text" unselectable>' + toolLabel + '</span><span class="' + vars.css + '_tool_icon" unselectable></span></a>');
            toolbar.find("." + vars.css + '_tool_' + buttons[n].cls).append('<div class="' + vars.css + '_formats" unselectable></div>');
            for (var f = 0; f < vars.formats.length; f++) {
              toolbar.find("." + vars.css + "_formats").append('<a ' + vars.css + '-formatval="' + vars.formats[f][0] + '" class="' + vars.css + '_format ' + vars.css + '_format_' + f + '" role="menuitem" unselectable>' + vars.formats[f][1] + '</a>')
            }
            toolbar.find("." + vars.css + "_formats").data("status", false)
          } else if (buttons[n].name == "fsize" && $.isArray(vars.fsizes)) {
            toolbar.find("." + vars.css + '_tool_' + buttons[n].cls).append('<div class="' + vars.css + '_fontsizes" unselectable></div>');
            for (var f = 0; f < vars.fsizes.length; f++) {
              toolbar.find("." + vars.css + "_fontsizes").append('<a ' + vars.css + '-styleval="' + vars.fsizes[f] + '" class="' + vars.css + '_fontsize" style="font-size:' + vars.fsizes[f] + vars.funit + '" role="menuitem" unselectable>Abcdefgh...</a>')
            }
          } else if (buttons[n].name == "color" && $.isArray(colors)) {
            toolbar.find("." + vars.css + '_tool_' + buttons[n].cls).append('<div class="' + vars.css + '_cpalette" unselectable></div>');
            for (var c = 0; c < colors.length; c++) {
              if (colors[c] != null) toolbar.find("." + vars.css + "_cpalette").append('<a ' + vars.css + '-styleval="' + colors[c] + '" class="' + vars.css + '_color" style="background-color: rgb(' + colors[c] + ')" role="gridcell" unselectable></a>');
              else toolbar.find("." + vars.css + "_cpalette").append('<div class="' + vars.css + "_colorSeperator" + '"></div>')
            }
          }
        }
      }
      linktypes.data("linktype", "0");
      for (var n = 0; n < 3; n++) {
        linktypes.append('<a ' + vars.css + '-linktype="' + n + '" unselectable>' + vars.linktypes[n] + '</a>');
        linktypeview.html('<div class="' + vars.css + '_linktypearrow" unselectable></div><div class="' + vars.css + '_linktypetext">' + linktypes.find('a:eq(' + linktypes.data("linktype") + ')').text() + '</div>')
      }
      var prefixCss = "";
      if (/msie/.test(thisBrowser)) prefixCss = '-ms-';
      else if (/chrome/.test(thisBrowser) || /safari/.test(thisBrowser) || /yandex/.test(thisBrowser)) prefixCss = '-webkit-';
      else if (/mozilla/.test(thisBrowser)) prefixCss = '-moz-';
      else if (/opera/.test(thisBrowser)) prefixCss = '-o-';
      else if (/konqueror/.test(thisBrowser)) prefixCss = '-khtml-';
      else prefixCss = '';
      if (vars.placeholder && vars.placeholder != "") {
        jQTE.prepend('<div class="' + vars.css + '_placeholder" unselectable><div class="' + vars.css + '_placeholder_text">' + vars.placeholder + '</div></div>');
        var placeHolder = jQTE.find("." + vars.css + "_placeholder");
        placeHolder.click(function () {
          editor.focus()
        })
      }
      jQTE.find("[unselectable]").css(prefixCss + "user-select", "none").addClass("unselectable").attr("unselectable", "on").on("selectstart mousedown", false);
      var toolbutton = toolbar.find("." + vars.css + "_tool"),
        formatbar = toolbar.find("." + vars.css + "_formats"),
        fsizebar = toolbar.find("." + vars.css + "_fontsizes"),
        cpalette = toolbar.find("." + vars.css + "_cpalette");

      function selectionGet() {
        if (window.getSelection) return window.getSelection();
        else if (document.selection && document.selection.createRange && document.selection.type != "None") return document.selection.createRange()
      }
      function selectionSet(addCommand, thirdParam) {
        var range, sel = selectionGet();
        if (window.getSelection) {
          if (sel.anchorNode && sel.getRangeAt) range = sel.getRangeAt(0);
          if (range) {
            sel.removeAllRanges();
            sel.addRange(range)
          }
          if (!thisBrowser.match(/msie/)) document.execCommand('StyleWithCSS', false, false);
          document.execCommand(addCommand, false, thirdParam)
        } else if (document.selection && document.selection.createRange && document.selection.type != "None") {
          range = document.selection.createRange();
          range.execCommand(addCommand, false, thirdParam)
        }
        affectStyleAround(false, false, true)
      }
      function replaceSelection(tTag, tAttr, tVal) {
        if (editor.not(":focus")) editor.focus();
        if (window.getSelection) {
          var selObj = selectionGet(),
            selRange, newElement, documentFragment;
          if (selObj.anchorNode && selObj.getRangeAt) {
            selRange = selObj.getRangeAt(0);
            newElement = document.createElement(tTag);
            $(newElement).attr(tAttr, tVal);
            documentFragment = selRange.extractContents();
            newElement.appendChild(documentFragment);
            selRange.insertNode(newElement);
            selObj.removeAllRanges();
            if (tAttr == "style") affectStyleAround($(newElement), tVal);
            else affectStyleAround($(newElement), false)
          }
        } else if (document.selection && document.selection.createRange && document.selection.type != "None") {
          var range = document.selection.createRange(),
            selectedText = range.htmlText,
            newText = '<' + tTag + ' ' + tAttr + '="' + tVal + '">' + selectedText + '</' + tTag + '>';
          document.selection.createRange().pasteHTML(newText)
        }
      }
      var getSelectedNode = function (exclusive) {
        var node, selection;
        if (typeof exclusive == "undefined") {
          exclusive = false
        }
        if (window.getSelection) {
          selection = getSelection();
          node = selection.anchorNode
        }
        if (!node && document.selection && document.selection.createRange && document.selection.type != "None") {
          selection = document.selection;
          var range = selection.getRangeAt ? selection.getRangeAt(0) : selection.createRange();
          node = range.commonAncestorContainer ? range.commonAncestorContainer : range.parentElement ? range.parentElement() : range.item(0)
        }
        if (node) {
          if (node.nodeName != "#text" && exclusive) {
            return false
          } else {
            return (node.nodeName == "#text" ? $(node.parentNode) : $(node))
          }
        } else return false
      };

      function affectStyleAround(element, style, exclusive) {
        if (typeof exclusive == "undefined") {
          exclusive = false
        }
        var selectedTag = getSelectedNode(exclusive);
        selectedTag = selectedTag ? selectedTag : element;
        if (selectedTag && style == false) {
          if (selectedTag.parent().is("[style]")) selectedTag.attr("style", selectedTag.parent().attr("style"));
          if (selectedTag.is("[style]")) selectedTag.find("*").attr("style", selectedTag.attr("style"))
        } else if (element && style && element.is("[style]")) {
          var styleKey = style.split(";");
          styleKey = styleKey[0].split(":");
          if (element.is("[style*=" + styleKey[0] + "]")) element.find("*").css(styleKey[0], styleKey[1]);
          selectText(element)
        }
      }
      function selectText(element) {
        if (element) {
          var element = element[0];
          if (document.body.createTextRange) {
            var range = document.body.createTextRange();
            range.moveToElementText(element);
            range.select()
          } else if (window.getSelection) {
            var selection = window.getSelection(),
              range = document.createRange();
            if (element != "undefined" && element != null) {
              range.selectNodeContents(element);
              selection.removeAllRanges();
              selection.addRange(range);
              if ($(element).is(":empty")) {
                $(element).append("&nbsp;");
                selectText($(element))
              }
            }
          }
        }
      }
      function selected2link() {
        if (!toolbar.data("sourceOpened")) {
          var selectedTag = getSelectedNode(),
            thisHrefLink = "http://";
          linkAreaSwitch(true);
          if (selectedTag) {
            var thisTagName = selectedTag.prop('tagName').toLowerCase();
            if (thisTagName == "a" && selectedTag.is('[href]')) {
              thisHrefLink = selectedTag.attr('href');
              selectedTag.attr(setdatalink, "")
            } else replaceSelection("a", setdatalink, "")
          } else linkinput.val(thisHrefLink).focus();
          linktypeselect.click(function (e) {
            if ($(e.target).hasClass(vars.css + "_linktypetext") || $(e.target).hasClass(vars.css + "_linktypearrow")) linktypeSwitch(true)
          });
          linktypes.find("a").click(function () {
            var thisLinkType = $(this).attr(vars.css + "-linktype");
            linktypes.data("linktype", thisLinkType);
            linktypeview.find("." + vars.css + "_linktypetext").html(linktypes.find('a:eq(' + linktypes.data("linktype") + ')').text());
            linkInputSet(thisHrefLink);
            linktypeSwitch()
          });
          linkInputSet(thisHrefLink);
          linkinput.focus().val(thisHrefLink).bind("keypress keyup", function (e) {
            if (e.keyCode == 13) {
              linkRecord(jQTE.find("[" + setdatalink + "]"));
              return false
            }
          });
          linkbutton.click(function () {
            linkRecord(jQTE.find("[" + setdatalink + "]"))
          })
        } else linkAreaSwitch(false)
      }
      function linkRecord(thisSelection) {
        linkinput.focus();
        selectText(thisSelection);
        thisSelection.removeAttr(setdatalink);
        if (linktypes.data("linktype") != "2") selectionSet("createlink", linkinput.val());
        else {
          selectionSet("insertImage", linkinput.val());
          editor.find("img").each(function () {
            var emptyPrevLinks = $(this).prev("a"),
              emptyNextLinks = $(this).next("a");
            if (emptyPrevLinks.length > 0 && emptyPrevLinks.html() == "") emptyPrevLinks.remove();
            else if (emptyNextLinks.length > 0 && emptyNextLinks.html() == "") emptyNextLinks.remove()
          })
        }
        linkAreaSwitch();
        editor.trigger("change")
      }
      function linkAreaSwitch(status) {
        clearSetElement("[" + setdatalink + "]:not([href])");
        jQTE.find("[" + setdatalink + "][href]").removeAttr(setdatalink);
        if (status) {
          toolbar.data("linkOpened", true);
          linkform.show()
        } else {
          toolbar.data("linkOpened", false);
          linkform.hide()
        }
        linktypeSwitch()
      }
      function linktypeSwitch(status) {
        if (status) linktypes.show();
        else linktypes.hide()
      }
      function linkInputSet(thisHrefLink) {
        var currentType = linktypes.data("linktype");
        if (currentType == "1" && (linkinput.val() == "http://" || linkinput.is("[value^='http://']") || !linkinput.is("[value^=mailto]"))) linkinput.val("mailto:");
        else if (currentType != "1" && !linkinput.is("[value^='http://']")) linkinput.val("http://");
        else linkinput.val(thisHrefLink)
      }
      function selected2style(styleCommand) {
        if (!toolbar.data("sourceOpened")) {
          if (styleCommand == "fSize") styleField = fsizebar;
          else if (styleCommand == "colors") styleField = cpalette;
          styleFieldSwitch(styleField, true);
          styleField.find("a").unbind("click").click(function () {
            var styleValue = $(this).attr(vars.css + "-styleval");
            if (styleCommand == "fSize") {
              styleType = "font-size";
              styleValue = styleValue + vars.funit
            } else if (styleCommand == "colors") {
              styleType = "color";
              styleValue = "rgb(" + styleValue + ")"
            }
            var prevStyles = refuseStyle(styleType);
            replaceSelection("span", "style", styleType + ":" + styleValue + ";" + prevStyles);
            styleFieldSwitch("", false);
            $('.' + vars.css + '_title').remove();
            editor.trigger("change")
          })
        } else styleFieldSwitch(styleField, false);
        linkAreaSwitch(false)
      }
      function styleFieldSwitch(styleField, status) {
        var mainData = "",
          allData = [{
            "d": "fsizeOpened",
            "f": fsizebar
          },
          {
            "d": "cpallOpened",
            "f": cpalette
          }];
        if (styleField != "") {
          for (var si = 0; si < allData.length; si++) {
            if (styleField == allData[si]["f"]) mainData = allData[si]
          }
        }
        if (status) {
          toolbar.data(mainData["d"], true);
          mainData["f"].slideDown(100);
          for (var si = 0; si < allData.length; si++) {
            if (mainData["d"] != allData[si]["d"]) {
              toolbar.data(allData[si]["d"], false);
              allData[si]["f"].slideUp(100)
            }
          }
        } else {
          for (var si = 0; si < allData.length; si++) {
            toolbar.data(allData[si]["d"], false);
            allData[si]["f"].slideUp(100)
          }
        }
      }
      function clearSetElement(elem) {
        jQTE.find(elem).each(function () {
          $(this).before($(this).html()).remove()
        })
      }
      function refuseStyle(refStyle) {
        var selectedTag = getSelectedNode();
        if (selectedTag && selectedTag.is("[style]") && selectedTag.css(refStyle) != "") {
          var refValue = selectedTag.css(refStyle);
          selectedTag.css(refStyle, "");
          var cleanStyle = selectedTag.attr("style");
          selectedTag.css(refStyle, refValue);
          return cleanStyle
        } else return ""
      }
      function selected2format() {
        formatFieldSwitch(true);
        formatbar.find("a").click(function () {
          $("*", this).click(function (e) {
            e.preventDefault();
            return false
          });
          formatLabelView($(this).text());
          var formatValue = $(this).attr(vars.css + "-formatval");
          selectionSet("formatBlock", '<' + formatValue + '>');
          formatFieldSwitch(false)
        })
      }
      function formatFieldSwitch(status) {
        var thisStatus = status ? true : false;
        thisStatus = status && formatbar.data("status") ? true : false;
        if (thisStatus || !status) formatbar.data("status", false).slideUp(200);
        else formatbar.data("status", true).slideDown(200)
      }
      function formatLabelView(str) {
        var formatLabel = formatbar.closest("." + vars.css + "_tool").find("." + vars.css + "_tool_label").find("." + vars.css + "_tool_text");
        if (str.length > 10) str = str.substr(0, 7) + "...";
        formatLabel.html(str)
      }
      function extractToText(strings) {
        var $htmlContent, $htmlPattern, $htmlReplace;
        $htmlContent = strings.replace(/\n/gim, '').replace(/\r/gim, '').replace(/\t/gim, '').replace(/&nbsp;/gim, ' ');
        $htmlPattern = [/\<span(|\s+.*?)><span(|\s+.*?)>(.*?)<\/span><\/span>/gim, /<(\w*[^p])\s*[^\/>]*>\s*<\/\1>/gim, /\<div(|\s+.*?)>(.*?)\<\/div>/gim, /\<strong(|\s+.*?)>(.*?)\<\/strong>/gim, /\<em(|\s+.*?)>(.*?)\<\/em>/gim];
        $htmlReplace = ['<span$2>$3</span>', '', '<p$1>$2</p>', '<b$1>$2</b>', '<i$1>$2</i>'];
        for (c = 0; c < 5; c++) {
          for (var i = 0; i < $htmlPattern.length; i++) {
            $htmlContent = $htmlContent.replace($htmlPattern[i], $htmlReplace[i])
          }
        }
        if (!vars.p) $htmlContent = $htmlContent.replace(/\<p(|\s+.*?)>(.*?)\<\/p>/ig, '<br/>$2');
        if (!vars.br) {
          $htmlPattern = [/\<br>(.*?)/ig, /\<br\/>(.*?)/ig];
          $htmlReplace = ['<p>$1</p>', '<p>$1</p>'];
          for (var i = 0; i < $htmlPattern.length; i++) {
            $htmlContent = $htmlContent.replace($htmlPattern[i], $htmlReplace[i])
          }
        }
        if (!vars.p && !vars.br) $htmlContent = $htmlContent.replace(/\<p>(.*?)\<\/p>/ig, '<div>$1</div>');
        return $htmlContent
      }
      function postToSource() {
        var sourceStrings = editor.text() == "" && editor.html().length < 12 ? "" : editor.html();
        thisElement.val(extractToText(sourceStrings))
      }
      function postToEditor() {
        editor.html(extractToText(thisElement.val()))
      }
      function detectElement(tags) {
        var resultdetect = false,
          $node = getSelectedNode(),
          parentsTag;
        if ($node) {
          $.each(tags, function (i, val) {
            parentsTag = $node.prop('tagName').toLowerCase();
            if (parentsTag == val) resultdetect = true;
            else {
              $node.parentsUntil("." + vars.css).each(function () {
                parentsTag = $(this).prop('tagName').toLowerCase();
                if (parentsTag == val) resultdetect = true
              })
            }
          });
          return resultdetect
        } else return false
      }
      function buttonEmphasize(e) {
        for (var n = 0; n < buttons.length; n++) {
          if (vars[buttons[n].name] && buttons[n].emphasis && buttons[n].tag != '') detectElement(buttons[n].tag) ? toolbar.find('.' + vars.css + '_tool_' + buttons[n].cls).addClass(emphasize) : $('.' + vars.css + '_tool_' + buttons[n].cls).removeClass(emphasize)
        }
        if (vars.format && $.isArray(vars.formats)) {
          var isFoundFormat = false;
          for (var f = 0; f < vars.formats.length; f++) {
            var thisFormat = [];
            thisFormat[0] = vars.formats[f][0];
            if (vars.formats[f][0].length > 0 && detectElement(thisFormat)) {
              formatLabelView(vars.formats[f][1]);
              isFoundFormat = true;
              break
            }
          }
          if (!isFoundFormat) formatLabelView(vars.formats[0][1])
        }
        styleFieldSwitch("", false);
        formatFieldSwitch(false)
      }
      toolbutton.unbind("click").click(function (e) {
        if ($(this).data('command') == 'displaysource' && !toolbar.data("sourceOpened")) {
          toolbar.find("." + vars.css + "_tool").addClass(vars.css + "_hiddenField");
          $(this).removeClass(vars.css + "_hiddenField");
          toolbar.data("sourceOpened", true);
          thisElement.css("height", editor.outerHeight());
          sourceField.removeClass(vars.css + "_hiddenField");
          editor.addClass(vars.css + "_hiddenField");
          thisElement.focus();
          linkAreaSwitch(false);
          styleFieldSwitch("", false);
          formatFieldSwitch();
          if (vars.placeholder && vars.placeholder != "") placeHolder.hide()
        } else {
          if (!toolbar.data("sourceOpened")) {
            if ($(this).data('command') == 'linkcreator') {
              if (!toolbar.data("linkOpened")) selected2link();
              else {
                linkAreaSwitch(false);
                formatFieldSwitch(false)
              }
            } else if ($(this).data('command') == 'formats') {
              if ($(this).data('command') == 'formats' && !$(e.target).hasClass(vars.css + "_format")) selected2format();
              styleFieldSwitch("", false);
              if (editor.not(":focus")) editor.focus()
            } else if ($(this).data('command') == 'fSize' || $(this).data('command') == 'colors') {
              if (($(this).data('command') == 'fSize' && !$(e.target).hasClass(vars.css + "_fontsize")) || ($(this).data('command') == 'colors' && !$(e.target).hasClass(vars.css + "_color"))) selected2style($(this).data('command'));
              formatFieldSwitch(false);
              if (editor.not(":focus")) editor.focus()
            } else {
              if (editor.not(":focus")) editor.focus();
              selectionSet($(this).data('command'), null);
              styleFieldSwitch("", false);
              formatFieldSwitch(false);
              linktypeSwitch();
              $(this).data('emphasis') == true && !$(this).hasClass(emphasize) ? $(this).addClass(emphasize) : $(this).removeClass(emphasize);
              sourceField.addClass(vars.css + "_hiddenField");
              editor.removeClass(vars.css + "_hiddenField")
            }
          } else {
            toolbar.data("sourceOpened", false);
            toolbar.find("." + vars.css + "_tool").removeClass(vars.css + "_hiddenField");
            sourceField.addClass(vars.css + "_hiddenField");
            editor.removeClass(vars.css + "_hiddenField")
          }
          if (vars.placeholder && vars.placeholder != "") editor.html() != "" ? placeHolder.hide() : placeHolder.show()
        }
        editor.trigger("change")
      }).hover(function (e) {
        if (vars.title && $(this).data("title") != "" && ($(e.target).hasClass(vars.css + "_tool") || $(e.target).hasClass(vars.css + "_tool_icon"))) {
          $('.' + vars.css + '_title').remove();
          jQTE.append('<div class="' + vars.css + '_title"><div class="' + vars.css + '_titleArrow"><div class="' + vars.css + '_titleArrowIcon"></div></div><div class="' + vars.css + '_titleText">' + $(this).data("title") + '</div></div>');
          var thisTitle = $('.' + vars.css + '_title:first'),
            thisArrow = thisTitle.find('.' + vars.css + '_titleArrowIcon'),
            thisPosition = $(this).position(),
            thisAlignX = thisPosition.left + $(this).outerWidth() - (thisTitle.outerWidth() / 2) - ($(this).outerWidth() / 2),
            thisAlignY = (thisPosition.top + $(this).outerHeight() + 5);
          thisTitle.delay(400).css({
            'top': thisAlignY,
            'left': thisAlignX
          }).fadeIn(200)
        }
      }, function () {
        $('.' + vars.css + '_title').remove()
      });
      var editorChangeTimer = null;
      editor.bind("keypress keyup keydown drop cut copy paste DOMCharacterDataModified DOMSubtreeModified", function () {
        if (!toolbar.data("sourceOpened")) $(this).trigger("change");
        linktypeSwitch();
        if ($.isFunction(vars.change)) vars.change();
        if (vars.placeholder && vars.placeholder != "") $(this).text() != "" ? placeHolder.hide() : placeHolder.show()
      }).bind("change", function () {
        if (!toolbar.data("sourceOpened")) {
          clearTimeout(editorChangeTimer);
          editorChangeTimer = setTimeout(postToSource, 10)
        }
      }).keydown(function (e) {
        if (e.ctrlKey) {
          for (var n = 0; n < buttons.length; n++) {
            if (vars[buttons[n].name] && e.keyCode == buttons[n].key.charCodeAt(0)) {
              if (buttons[n].command != '' && buttons[n].command != 'linkcreator') selectionSet(buttons[n].command, null);
              else if (buttons[n].command == 'linkcreator') selected2link();
              return false
            }
          }
        }
      }).bind("mouseup keyup", buttonEmphasize).focus(function () {
        if ($.isFunction(vars.focus)) vars.focus();
        jQTE.addClass(vars.css + "_focused");
        if (/opera/.test(thisBrowser)) {
          var range = document.createRange();
          range.selectNodeContents(editor[0]);
          range.collapse(false);
          var selection = window.getSelection();
          selection.removeAllRanges();
          selection.addRange(range)
        }
      }).focusout(function () {
        toolbutton.removeClass(emphasize);
        styleFieldSwitch("", false);
        formatFieldSwitch(false);
        linktypeSwitch();
        if ($.isFunction(vars.blur)) vars.blur();
        jQTE.removeClass(vars.css + "_focused");
        if ($.isArray(vars.formats)) formatLabelView(vars.formats[0][1])
      });
      thisElement.bind("keydown keyup", function () {
        setTimeout(postToEditor, 0);
        $(this).height($(this)[0].scrollHeight);
        if ($(this).val() == "") $(this).height(0)
      }).focus(function () {
        jQTE.addClass(vars.css + "_focused")
      }).focusout(function () {
        jQTE.removeClass(vars.css + "_focused")
      })
    })
  }
})(jQuery);
