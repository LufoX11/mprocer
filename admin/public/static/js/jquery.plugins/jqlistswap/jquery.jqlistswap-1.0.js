/**
 * jqListswap
 *
 * Plugin for jQuery Mobile.
 * Swaps <li> elements in a <ul> element.
 *
 * ---
 * Use: Just attach it to a <ul> element.
 *
 * ("ul").jqlistswap();
 *
 * ---
 * @author ShamanK
 * @version 1.0
 */

$.fn.jqlistswap = function () {

    var ul = $(this);

    $(this).find("a").die().live("click", function (e) {

        e.preventDefault();
        var li = $(this).parents("li").first();
        var nextLi = li.next();
        if (typeof nextLi[0] != "undefined") {
            nextLi.after(li.clone());
            li.remove();
            ul.listview("refresh");
        }
    });
};
