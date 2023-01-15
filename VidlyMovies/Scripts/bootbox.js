///**
// * bootbox.js 5.4.0
// *
// * http://bootboxjs.com/license.txt
// */
//!function (t, e) { 'use strict'; 'function' == typeof define && define.amd ? define(['jquery'], e) : 'object' == typeof exports ? module.exports = e(require('jquery')) : t.bootbox = e(t.jQuery) }(this, function e(p, u) { 'use strict'; var r, n, i, l; Object.keys || (Object.keys = (r = Object.prototype.hasOwnProperty, n = !{ toString: null }.propertyIsEnumerable('toString'), l = (i = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor']).length, function (t) { if ('function' != typeof t && ('object' != typeof t || null === t)) throw new TypeError('Object.keys called on non-object'); var e, o, a = []; for (e in t) r.call(t, e) && a.push(e); if (n) for (o = 0; o < l; o++) r.call(t, i[o]) && a.push(i[o]); return a })); var d = {}; d.VERSION = '5.0.0'; var b = { en: { OK: 'OK', CANCEL: 'Cancel', CONFIRM: 'OK' } }, f = { dialog: "<div class=\"bootbox modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-body\"><div class=\"bootbox-body\"></div></div></div></div></div>", header: "<div class=\"modal-header\"><h5 class=\"modal-title\"></h5></div>", footer: '<div class="modal-footer"></div>', closeButton: '<button type="button" class="bootbox-close-button close" aria-hidden="true">&times;</button>', form: '<form class="bootbox-form"></form>', button: '<button type="button" class="btn"></button>', option: '<option></option>', promptMessage: '<div class="bootbox-prompt-message"></div>', inputs: { text: '<input class="bootbox-input bootbox-input-text form-control" autocomplete="off" type="text" />', textarea: '<textarea class="bootbox-input bootbox-input-textarea form-control"></textarea>', email: '<input class="bootbox-input bootbox-input-email form-control" autocomplete="off" type="email" />', select: '<select class="bootbox-input bootbox-input-select form-control"></select>', checkbox: '<div class="form-check checkbox"><label class="form-check-label"><input class="form-check-input bootbox-input bootbox-input-checkbox" type="checkbox" /></label></div>', radio: '<div class="form-check radio"><label class="form-check-label"><input class="form-check-input bootbox-input bootbox-input-radio" type="radio" name="bootbox-radio" /></label></div>', date: '<input class="bootbox-input bootbox-input-date form-control" autocomplete="off" type="date" />', time: '<input class="bootbox-input bootbox-input-time form-control" autocomplete="off" type="time" />', number: '<input class="bootbox-input bootbox-input-number form-control" autocomplete="off" type="number" />', password: '<input class="bootbox-input bootbox-input-password form-control" autocomplete="off" type="password" />', range: '<input class="bootbox-input bootbox-input-range form-control-range" autocomplete="off" type="range" />' } }, m = { locale: 'en', backdrop: 'static', animate: !0, className: null, closeButton: !0, show: !0, container: 'body', value: '', inputType: 'text', swapButtonOrder: !1, centerVertical: !1, multiple: !1, scrollable: !1 }; function c(t, e, o) { return p.extend(!0, {}, t, function (t, e) { var o = t.length, a = {}; if (o < 1 || 2 < o) throw new Error('Invalid argument length'); return 2 === o || 'string' == typeof t[0] ? (a[e[0]] = t[0], a[e[1]] = t[1]) : a = t[0], a }(e, o)) } function h(t, e, o, a) { var r; a && a[0] && (r = a[0].locale || m.locale, (a[0].swapButtonOrder || m.swapButtonOrder) && (e = e.reverse())); var n, i, l, s = { className: 'bootbox-' + t, buttons: function (t, e) { for (var o = {}, a = 0, r = t.length; a < r; a++) { var n = t[a], i = n.toLowerCase(), l = n.toUpperCase(); o[i] = { label: (s = l, c = e, p = b[c], p ? p[s] : b.en[s]) } } var s, c, p; return o }(e, r) }; return n = c(s, a, o), l = {}, v(i = e, function (t, e) { l[e] = !0 }), v(n.buttons, function (t) { if (l[t] === u) throw new Error('button key "' + t + '" is not allowed (options are ' + i.join(' ') + ')') }), n } function w(t) { return Object.keys(t).length } function v(t, o) { var a = 0; p.each(t, function (t, e) { o(t, e, a++) }) } function g(t) { t.data.dialog.find('.bootbox-accept').first().trigger('focus') } function y(t) { t.target === t.data.dialog[0] && t.data.dialog.remove() } function x(t) { t.target === t.data.dialog[0] && (t.data.dialog.off('escape.close.bb'), t.data.dialog.off('click')) } function k(t, e, o) { t.stopPropagation(), t.preventDefault(), p.isFunction(o) && !1 === o.call(e, t) || e.modal('hide') } function E(t) { return /([01][0-9]|2[0-3]):[0-5][0-9]?:[0-5][0-9]/.test(t) } function O(t) { return /(\d{4})-(\d{2})-(\d{2})/.test(t) } return d.locales = function (t) { return t ? b[t] : b }, d.addLocale = function (t, o) { return p.each(['OK', 'CANCEL', 'CONFIRM'], function (t, e) { if (!o[e]) throw new Error('Please supply a translation for "' + e + '"') }), b[t] = { OK: o.OK, CANCEL: o.CANCEL, CONFIRM: o.CONFIRM }, d }, d.removeLocale = function (t) { if ('en' === t) throw new Error('"en" is used as the default and fallback locale and cannot be removed.'); return delete b[t], d }, d.setLocale = function (t) { return d.setDefaults('locale', t) }, d.setDefaults = function () { var t = {}; return 2 === arguments.length ? t[arguments[0]] = arguments[1] : t = arguments[0], p.extend(m, t), d }, d.hideAll = function () { return p('.bootbox').modal('hide'), d }, d.init = function (t) { return e(t || p) }, d.dialog = function (t) { if (p.fn.modal === u) throw new Error("\"$.fn.modal\" is not defined; please double check you have included the Bootstrap JavaScript library. See https://getbootstrap.com/docs/4.4/getting-started/javascript/ for more details."); if (t = function (r) { var n, i; if ('object' != typeof r) throw new Error('Please supply an object of options'); if (!r.message) throw new Error('"message" option must not be null or an empty string.'); (r = p.extend({}, m, r)).buttons || (r.buttons = {}); return n = r.buttons, i = w(n), v(n, function (t, e, o) { if (p.isFunction(e) && (e = n[t] = { callback: e }), 'object' !== p.type(e)) throw new Error('button with key "' + t + '" must be an object'); if (e.label || (e.label = t), !e.className) { var a = !1; a = r.swapButtonOrder ? 0 === o : o === i - 1, e.className = i <= 2 && a ? 'btn-primary' : 'btn-secondary btn-default' } }), r }(t), p.fn.modal.Constructor.VERSION) { t.fullBootstrapVersion = p.fn.modal.Constructor.VERSION; var e = t.fullBootstrapVersion.indexOf('.'); t.bootstrap = t.fullBootstrapVersion.substring(0, e) } else t.bootstrap = '2', t.fullBootstrapVersion = '2.3.2', console.warn('Bootbox will *mostly* work with Bootstrap 2, but we do not officially support it. Please upgrade, if possible.'); var o = p(f.dialog), a = o.find('.modal-dialog'), r = o.find('.modal-body'), n = p(f.header), i = p(f.footer), l = t.buttons, s = { onEscape: t.onEscape }; if (r.find('.bootbox-body').html(t.message), 0 < w(t.buttons) && (v(l, function (t, e) { var o = p(f.button); switch (o.data('bb-handler', t), o.addClass(e.className), t) { case 'ok': case 'confirm': o.addClass('bootbox-accept'); break; case 'cancel': o.addClass('bootbox-cancel') } o.html(e.label), i.append(o), s[t] = e.callback }), r.after(i)), !0 === t.animate && o.addClass('fade'), t.className && o.addClass(t.className), t.size) switch (t.fullBootstrapVersion.substring(0, 3) < '3.1' && console.warn('"size" requires Bootstrap 3.1.0 or higher. You appear to be using ' + t.fullBootstrapVersion + '. Please upgrade to use this option.'), t.size) { case 'small': case 'sm': a.addClass('modal-sm'); break; case 'large': case 'lg': a.addClass('modal-lg'); break; case 'extra-large': case 'xl': a.addClass('modal-xl'), t.fullBootstrapVersion.substring(0, 3) < '4.2' && console.warn('Using size "xl"/"extra-large" requires Bootstrap 4.2.0 or higher. You appear to be using ' + t.fullBootstrapVersion + '. Please upgrade to use this option.') } if (t.scrollable && (a.addClass('modal-dialog-scrollable'), t.fullBootstrapVersion.substring(0, 3) < '4.3' && console.warn('Using "scrollable" requires Bootstrap 4.3.0 or higher. You appear to be using ' + t.fullBootstrapVersion + '. Please upgrade to use this option.')), t.title && (r.before(n), o.find('.modal-title').html(t.title)), t.closeButton) { var c = p(f.closeButton); t.title ? 3 < t.bootstrap ? o.find('.modal-header').append(c) : o.find('.modal-header').prepend(c) : c.prependTo(r) } if (t.centerVertical && (a.addClass('modal-dialog-centered'), t.fullBootstrapVersion < '4.0.0' && console.warn('"centerVertical" requires Bootstrap 4.0.0-beta.3 or higher. You appear to be using ' + t.fullBootstrapVersion + '. Please upgrade to use this option.')), o.one('hide.bs.modal', { dialog: o }, x), t.onHide) { if (!p.isFunction(t.onHide)) throw new Error('Argument supplied to "onHide" must be a function'); o.on('hide.bs.modal', t.onHide) } if (o.one('hidden.bs.modal', { dialog: o }, y), t.onHidden) { if (!p.isFunction(t.onHidden)) throw new Error('Argument supplied to "onHidden" must be a function'); o.on('hidden.bs.modal', t.onHidden) } if (t.onShow) { if (!p.isFunction(t.onShow)) throw new Error('Argument supplied to "onShow" must be a function'); o.on('show.bs.modal', t.onShow) } if (o.one('shown.bs.modal', { dialog: o }, g), t.onShown) { if (!p.isFunction(t.onShown)) throw new Error('Argument supplied to "onShown" must be a function'); o.on('shown.bs.modal', t.onShown) } return 'static' !== t.backdrop && o.on('click.dismiss.bs.modal', function (t) { o.children('.modal-backdrop').length && (t.currentTarget = o.children('.modal-backdrop').get(0)), t.target === t.currentTarget && o.trigger('escape.close.bb') }), o.on('escape.close.bb', function (t) { s.onEscape && k(t, o, s.onEscape) }), o.on('click', '.modal-footer button:not(.disabled)', function (t) { var e = p(this).data('bb-handler'); e !== u && k(t, o, s[e]) }), o.on('click', '.bootbox-close-button', function (t) { k(t, o, s.onEscape) }), o.on('keyup', function (t) { 27 === t.which && o.trigger('escape.close.bb') }), p(t.container).append(o), o.modal({ backdrop: !!t.backdrop && 'static', keyboard: !1, show: !1 }), t.show && o.modal('show'), o }, d.alert = function () { var t; if ((t = h('alert', ['ok'], ['message', 'callback'], arguments)).callback && !p.isFunction(t.callback)) throw new Error('alert requires the "callback" property to be a function when provided'); return t.buttons.ok.callback = t.onEscape = function () { return !p.isFunction(t.callback) || t.callback.call(this) }, d.dialog(t) }, d.confirm = function () { var t; if (t = h('confirm', ['cancel', 'confirm'], ['message', 'callback'], arguments), !p.isFunction(t.callback)) throw new Error('confirm requires a callback'); return t.buttons.cancel.callback = t.onEscape = function () { return t.callback.call(this, !1) }, t.buttons.confirm.callback = function () { return t.callback.call(this, !0) }, d.dialog(t) }, d.prompt = function () { var r, e, t, n, o, a; if (t = p(f.form), (r = h('prompt', ['cancel', 'confirm'], ['title', 'callback'], arguments)).value || (r.value = m.value), r.inputType || (r.inputType = m.inputType), o = r.show === u ? m.show : r.show, r.show = !1, r.buttons.cancel.callback = r.onEscape = function () { return r.callback.call(this, null) }, r.buttons.confirm.callback = function () { var t; if ('checkbox' === r.inputType) t = n.find('input:checked').map(function () { return p(this).val() }).get(); else if ('radio' === r.inputType) t = n.find('input:checked').val(); else { if (n[0].checkValidity && !n[0].checkValidity()) return !1; t = 'select' === r.inputType && !0 === r.multiple ? n.find('option:selected').map(function () { return p(this).val() }).get() : n.val() } return r.callback.call(this, t) }, !r.title) throw new Error('prompt requires a title'); if (!p.isFunction(r.callback)) throw new Error('prompt requires a callback'); if (!f.inputs[r.inputType]) throw new Error('Invalid prompt type'); switch (n = p(f.inputs[r.inputType]), r.inputType) { case 'text': case 'textarea': case 'email': case 'password': n.val(r.value), r.placeholder && n.attr('placeholder', r.placeholder), r.pattern && n.attr('pattern', r.pattern), r.maxlength && n.attr('maxlength', r.maxlength), r.required && n.prop({ required: !0 }), r.rows && !isNaN(parseInt(r.rows)) && 'textarea' === r.inputType && n.attr({ rows: r.rows }); break; case 'date': case 'time': case 'number': case 'range': if (n.val(r.value), r.placeholder && n.attr('placeholder', r.placeholder), r.pattern && n.attr('pattern', r.pattern), r.required && n.prop({ required: !0 }), 'date' !== r.inputType && r.step) { if (!('any' === r.step || !isNaN(r.step) && 0 < parseFloat(r.step))) throw new Error('"step" must be a valid positive number or the value "any". See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-step for more information.'); n.attr('step', r.step) } !function (t, e, o) { var a = !1, r = !0, n = !0; if ('date' === t) e === u || (r = O(e)) ? o === u || (n = O(o)) || console.warn('Browsers which natively support the "date" input type expect date values to be of the form "YYYY-MM-DD" (see ISO-8601 https://www.iso.org/iso-8601-date-and-time-format.html). Bootbox does not enforce this rule, but your max value may not be enforced by this browser.') : console.warn('Browsers which natively support the "date" input type expect date values to be of the form "YYYY-MM-DD" (see ISO-8601 https://www.iso.org/iso-8601-date-and-time-format.html). Bootbox does not enforce this rule, but your min value may not be enforced by this browser.'); else if ('time' === t) { if (e !== u && !(r = E(e))) throw new Error('"min" is not a valid time. See https://www.w3.org/TR/2012/WD-html-markup-20120315/datatypes.html#form.data.time for more information.'); if (o !== u && !(n = E(o))) throw new Error('"max" is not a valid time. See https://www.w3.org/TR/2012/WD-html-markup-20120315/datatypes.html#form.data.time for more information.') } else { if (e !== u && isNaN(e)) throw r = !1, new Error('"min" must be a valid number. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-min for more information.'); if (o !== u && isNaN(o)) throw n = !1, new Error('"max" must be a valid number. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-max for more information.') } if (r && n) { if (o <= e) throw new Error('"max" must be greater than "min". See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-max for more information.'); a = !0 } return a }(r.inputType, r.min, r.max) || (r.min !== u && n.attr('min', r.min), r.max !== u && n.attr('max', r.max)); break; case 'select': var i = {}; if (a = r.inputOptions || [], !p.isArray(a)) throw new Error('Please pass an array of input options'); if (!a.length) throw new Error('prompt with "inputType" set to "select" requires at least one option'); r.placeholder && n.attr('placeholder', r.placeholder), r.required && n.prop({ required: !0 }), r.multiple && n.prop({ multiple: !0 }), v(a, function (t, e) { var o = n; if (e.value === u || e.text === u) throw new Error('each option needs a "value" property and a "text" property'); e.group && (i[e.group] || (i[e.group] = p('<optgroup />').attr('label', e.group)), o = i[e.group]); var a = p(f.option); a.attr('value', e.value).text(e.text), o.append(a) }), v(i, function (t, e) { n.append(e) }), n.val(r.value); break; case 'checkbox': var l = p.isArray(r.value) ? r.value : [r.value]; if (!(a = r.inputOptions || []).length) throw new Error('prompt with "inputType" set to "checkbox" requires at least one option'); n = p('<div class="bootbox-checkbox-list"></div>'), v(a, function (t, o) { if (o.value === u || o.text === u) throw new Error('each option needs a "value" property and a "text" property'); var a = p(f.inputs[r.inputType]); a.find('input').attr('value', o.value), a.find('label').append('\n' + o.text), v(l, function (t, e) { e === o.value && a.find('input').prop('checked', !0) }), n.append(a) }); break; case 'radio': if (r.value !== u && p.isArray(r.value)) throw new Error('prompt with "inputType" set to "radio" requires a single, non-array value for "value"'); if (!(a = r.inputOptions || []).length) throw new Error('prompt with "inputType" set to "radio" requires at least one option'); n = p('<div class="bootbox-radiobutton-list"></div>'); var s = !0; v(a, function (t, e) { if (e.value === u || e.text === u) throw new Error('each option needs a "value" property and a "text" property'); var o = p(f.inputs[r.inputType]); o.find('input').attr('value', e.value), o.find('label').append('\n' + e.text), r.value !== u && e.value === r.value && (o.find('input').prop('checked', !0), s = !1), n.append(o) }), s && n.find('input[type="radio"]').first().prop('checked', !0) } if (t.append(n), t.on('submit', function (t) { t.preventDefault(), t.stopPropagation(), e.find('.bootbox-accept').trigger('click') }), '' !== p.trim(r.message)) { var c = p(f.promptMessage).html(r.message); t.prepend(c), r.message = t } else r.message = t; return (e = d.dialog(r)).off('shown.bs.modal', g), e.on('shown.bs.modal', function () { n.focus() }), !0 === o && e.modal('show'), e }, d });




/**
 * bootbox.js [v4.3.0]
 *
 * http://bootboxjs.com/license.txt
 */

// @see https://github.com/makeusabrew/bootbox/issues/180
// @see https://github.com/makeusabrew/bootbox/issues/186
(function (root, factory) {

    "use strict";
    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define(["jquery"], factory);
    } else if (typeof exports === "object") {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require("jquery"));
    } else {
        // Browser globals (root is window)
        root.bootbox = factory(root.jQuery);
    }

}(this, function init($, undefined) {

    "use strict";

    // the base DOM structure needed to create a modal
    var templates = {
        dialog:
          "<div class='bootbox modal' tabindex='-1' role='dialog'>" +
            "<div class='modal-dialog'>" +
              "<div class='modal-content'>" +
                "<div class='modal-body'><div class='bootbox-body'></div></div>" +
              "</div>" +
            "</div>" +
          "</div>",
        header:
          "<div class='modal-header'>" +
            "<h4 class='modal-title'></h4>" +
          "</div>",
        footer:
          "<div class='modal-footer'></div>",
        closeButton:
          "<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",
        form:
          "<form class='bootbox-form'></form>",
        inputs: {
            text:
              "<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",
            textarea:
              "<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",
            email:
              "<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",
            select:
              "<select class='bootbox-input bootbox-input-select form-control'></select>",
            checkbox:
              "<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",
            date:
              "<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",
            time:
              "<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",
            number:
              "<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",
            password:
              "<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"
        }
    };

    var defaults = {
        // default language
        locale: "en",
        // show backdrop or not
        backdrop: true,
        // animate the modal in/out
        animate: true,
        // additional class string applied to the top level dialog
        className: null,
        // whether or not to include a close button
        closeButton: true,
        // show the dialog immediately by default
        show: true,
        // dialog container
        container: "body"
    };

    // our public object; augmented after our private API
    var exports = {};

    /**
     * @private
     */
    function _t(key) {
        var locale = locales[defaults.locale];
        return locale ? locale[key] : locales.en[key];
    }

    function processCallback(e, dialog, callback) {
        e.stopPropagation();
        e.preventDefault();

        // by default we assume a callback will get rid of the dialog,
        // although it is given the opportunity to override this

        // so, if the callback can be invoked and it *explicitly returns false*
        // then we'll set a flag to keep the dialog active...
        var preserveDialog = $.isFunction(callback) && callback(e) === false;

        // ... otherwise we'll bin it
        if (!preserveDialog) {
            dialog.modal("hide");
        }
    }

    function getKeyLength(obj) {
        // @TODO defer to Object.keys(x).length if available?
        var k, t = 0;
        for (k in obj) {
            t++;
        }
        return t;
    }

    function each(collection, iterator) {
        var index = 0;
        $.each(collection, function (key, value) {
            iterator(key, value, index++);
        });
    }

    function sanitize(options) {
        var buttons;
        var total;

        if (typeof options !== "object") {
            throw new Error("Please supply an object of options");
        }

        if (!options.message) {
            throw new Error("Please specify a message");
        }

        // make sure any supplied options take precedence over defaults
        options = $.extend({}, defaults, options);

        if (!options.buttons) {
            options.buttons = {};
        }

        // we only support Bootstrap's "static" and false backdrop args
        // supporting true would mean you could dismiss the dialog without
        // explicitly interacting with it
        options.backdrop = options.backdrop ? "static" : false;

        buttons = options.buttons;

        total = getKeyLength(buttons);

        each(buttons, function (key, button, index) {

            if ($.isFunction(button)) {
                // short form, assume value is our callback. Since button
                // isn't an object it isn't a reference either so re-assign it
                button = buttons[key] = {
                    callback: button
                };
            }

            // before any further checks make sure by now button is the correct type
            if ($.type(button) !== "object") {
                throw new Error("button with key " + key + " must be an object");
            }

            if (!button.label) {
                // the lack of an explicit label means we'll assume the key is good enough
                button.label = key;
            }

            if (!button.className) {
                if (total <= 2 && index === total - 1) {
                    // always add a primary to the main option in a two-button dialog
                    button.className = "btn-primary";
                } else {
                    button.className = "btn-default";
                }
            }
        });

        return options;
    }

    /**
     * map a flexible set of arguments into a single returned object
     * if args.length is already one just return it, otherwise
     * use the properties argument to map the unnamed args to
     * object properties
     * so in the latter case:
     * mapArguments(["foo", $.noop], ["message", "callback"])
     * -> { message: "foo", callback: $.noop }
     */
    function mapArguments(args, properties) {
        var argn = args.length;
        var options = {};

        if (argn < 1 || argn > 2) {
            throw new Error("Invalid argument length");
        }

        if (argn === 2 || typeof args[0] === "string") {
            options[properties[0]] = args[0];
            options[properties[1]] = args[1];
        } else {
            options = args[0];
        }

        return options;
    }

    /**
     * merge a set of default dialog options with user supplied arguments
     */
    function mergeArguments(defaults, args, properties) {
        return $.extend(
          // deep merge
          true,
          // ensure the target is an empty, unreferenced object
          {},
          // the base options object for this type of dialog (often just buttons)
          defaults,
          // args could be an object or array; if it's an array properties will
          // map it to a proper options object
          mapArguments(
            args,
            properties
          )
        );
    }

    /**
     * this entry-level method makes heavy use of composition to take a simple
     * range of inputs and return valid options suitable for passing to bootbox.dialog
     */
    function mergeDialogOptions(className, labels, properties, args) {
        //  build up a base set of dialog properties
        var baseOptions = {
            className: "bootbox-" + className,
            buttons: createLabels.apply(null, labels)
        };

        // ensure the buttons properties generated, *after* merging
        // with user args are still valid against the supplied labels
        return validateButtons(
          // merge the generated base properties with user supplied arguments
          mergeArguments(
            baseOptions,
            args,
            // if args.length > 1, properties specify how each arg maps to an object key
            properties
          ),
          labels
        );
    }

    /**
     * from a given list of arguments return a suitable object of button labels
     * all this does is normalise the given labels and translate them where possible
     * e.g. "ok", "confirm" -> { ok: "OK, cancel: "Annuleren" }
     */
    function createLabels() {
        var buttons = {};

        for (var i = 0, j = arguments.length; i < j; i++) {
            var argument = arguments[i];
            var key = argument.toLowerCase();
            var value = argument.toUpperCase();

            buttons[key] = {
                label: _t(value)
            };
        }

        return buttons;
    }

    function validateButtons(options, buttons) {
        var allowedButtons = {};
        each(buttons, function (key, value) {
            allowedButtons[value] = true;
        });

        each(options.buttons, function (key) {
            if (allowedButtons[key] === undefined) {
                throw new Error("button key " + key + " is not allowed (options are " + buttons.join("\n") + ")");
            }
        });

        return options;
    }

    exports.alert = function () {
        var options;

        options = mergeDialogOptions("alert", ["ok"], ["message", "callback"], arguments);

        if (options.callback && !$.isFunction(options.callback)) {
            throw new Error("alert requires callback property to be a function when provided");
        }

        /**
         * overrides
         */
        options.buttons.ok.callback = options.onEscape = function () {
            if ($.isFunction(options.callback)) {
                return options.callback();
            }
            return true;
        };

        return exports.dialog(options);
    };

    exports.confirm = function () {
        var options;

        options = mergeDialogOptions("confirm", ["cancel", "confirm"], ["message", "callback"], arguments);

        /**
         * overrides; undo anything the user tried to set they shouldn't have
         */
        options.buttons.cancel.callback = options.onEscape = function () {
            return options.callback(false);
        };

        options.buttons.confirm.callback = function () {
            return options.callback(true);
        };

        // confirm specific validation
        if (!$.isFunction(options.callback)) {
            throw new Error("confirm requires a callback");
        }

        return exports.dialog(options);
    };

    exports.prompt = function () {
        var options;
        var defaults;
        var dialog;
        var form;
        var input;
        var shouldShow;
        var inputOptions;

        // we have to create our form first otherwise
        // its value is undefined when gearing up our options
        // @TODO this could be solved by allowing message to
        // be a function instead...
        form = $(templates.form);

        // prompt defaults are more complex than others in that
        // users can override more defaults
        // @TODO I don't like that prompt has to do a lot of heavy
        // lifting which mergeDialogOptions can *almost* support already
        // just because of 'value' and 'inputType' - can we refactor?
        defaults = {
            className: "bootbox-prompt",
            buttons: createLabels("cancel", "confirm"),
            value: "",
            inputType: "text"
        };

        options = validateButtons(
          mergeArguments(defaults, arguments, ["title", "callback"]),
          ["cancel", "confirm"]
        );

        // capture the user's show value; we always set this to false before
        // spawning the dialog to give us a chance to attach some handlers to
        // it, but we need to make sure we respect a preference not to show it
        shouldShow = (options.show === undefined) ? true : options.show;

        /**
         * overrides; undo anything the user tried to set they shouldn't have
         */
        options.message = form;

        options.buttons.cancel.callback = options.onEscape = function () {
            return options.callback(null);
        };

        options.buttons.confirm.callback = function () {
            var value;

            switch (options.inputType) {
                case "text":
                case "textarea":
                case "email":
                case "select":
                case "date":
                case "time":
                case "number":
                case "password":
                    value = input.val();
                    break;

                case "checkbox":
                    var checkedItems = input.find("input:checked");

                    // we assume that checkboxes are always multiple,
                    // hence we default to an empty array
                    value = [];

                    each(checkedItems, function (_, item) {
                        value.push($(item).val());
                    });
                    break;
            }

            return options.callback(value);
        };

        options.show = false;

        // prompt specific validation
        if (!options.title) {
            throw new Error("prompt requires a title");
        }

        if (!$.isFunction(options.callback)) {
            throw new Error("prompt requires a callback");
        }

        if (!templates.inputs[options.inputType]) {
            throw new Error("invalid prompt type");
        }

        // create the input based on the supplied type
        input = $(templates.inputs[options.inputType]);

        switch (options.inputType) {
            case "text":
            case "textarea":
            case "email":
            case "date":
            case "time":
            case "number":
            case "password":
                input.val(options.value);
                break;

            case "select":
                var groups = {};
                inputOptions = options.inputOptions || [];

                if (!inputOptions.length) {
                    throw new Error("prompt with select requires options");
                }

                each(inputOptions, function (_, option) {

                    // assume the element to attach to is the input...
                    var elem = input;

                    if (option.value === undefined || option.text === undefined) {
                        throw new Error("given options in wrong format");
                    }


                    // ... but override that element if this option sits in a group

                    if (option.group) {
                        // initialise group if necessary
                        if (!groups[option.group]) {
                            groups[option.group] = $("<optgroup/>").attr("label", option.group);
                        }

                        elem = groups[option.group];
                    }

                    elem.append("<option value='" + option.value + "'>" + option.text + "</option>");
                });

                each(groups, function (_, group) {
                    input.append(group);
                });

                // safe to set a select's value as per a normal input
                input.val(options.value);
                break;

            case "checkbox":
                var values = $.isArray(options.value) ? options.value : [options.value];
                inputOptions = options.inputOptions || [];

                if (!inputOptions.length) {
                    throw new Error("prompt with checkbox requires options");
                }

                if (!inputOptions[0].value || !inputOptions[0].text) {
                    throw new Error("given options in wrong format");
                }

                // checkboxes have to nest within a containing element, so
                // they break the rules a bit and we end up re-assigning
                // our 'input' element to this container instead
                input = $("<div/>");

                each(inputOptions, function (_, option) {
                    var checkbox = $(templates.inputs[options.inputType]);

                    checkbox.find("input").attr("value", option.value);
                    checkbox.find("label").append(option.text);

                    // we've ensured values is an array so we can always iterate over it
                    each(values, function (_, value) {
                        if (value === option.value) {
                            checkbox.find("input").prop("checked", true);
                        }
                    });

                    input.append(checkbox);
                });
                break;
        }

        if (options.placeholder) {
            input.attr("placeholder", options.placeholder);
        }

        if (options.pattern) {
            input.attr("pattern", options.pattern);
        }

        // now place it in our form
        form.append(input);

        form.on("submit", function (e) {
            e.preventDefault();
            // Fix for SammyJS (or similar JS routing library) hijacking the form post.
            e.stopPropagation();
            // @TODO can we actually click *the* button object instead?
            // e.g. buttons.confirm.click() or similar
            dialog.find(".btn-primary").click();
        });

        dialog = exports.dialog(options);

        // clear the existing handler focusing the submit button...
        dialog.off("shown.bs.modal");

        // ...and replace it with one focusing our input, if possible
        dialog.on("shown.bs.modal", function () {
            input.focus();
        });

        if (shouldShow === true) {
            dialog.modal("show");
        }

        return dialog;
    };

    exports.dialog = function (options) {
        options = sanitize(options);

        var dialog = $(templates.dialog);
        var innerDialog = dialog.find(".modal-dialog");
        var body = dialog.find(".modal-body");
        var buttons = options.buttons;
        var buttonStr = "";
        var callbacks = {
            onEscape: options.onEscape
        };

        each(buttons, function (key, button) {

            // @TODO I don't like this string appending to itself; bit dirty. Needs reworking
            // can we just build up button elements instead? slower but neater. Then button
            // can just become a template too
            buttonStr += "<button data-bb-handler='" + key + "' type='button' class='btn " + button.className + "'>" + button.label + "</button>";
            callbacks[key] = button.callback;
        });

        body.find(".bootbox-body").html(options.message);

        if (options.animate === true) {
            dialog.addClass("fade");
        }

        if (options.className) {
            dialog.addClass(options.className);
        }

        if (options.size === "large") {
            innerDialog.addClass("modal-lg");
        }

        if (options.size === "small") {
            innerDialog.addClass("modal-sm");
        }

        if (options.title) {
            body.before(templates.header);
        }

        if (options.closeButton) {
            var closeButton = $(templates.closeButton);

            if (options.title) {
                dialog.find(".modal-header").prepend(closeButton);
            } else {
                closeButton.css("margin-top", "-10px").prependTo(body);
            }
        }

        if (options.title) {
            dialog.find(".modal-title").html(options.title);
        }

        if (buttonStr.length) {
            body.after(templates.footer);
            dialog.find(".modal-footer").html(buttonStr);
        }


        /**
         * Bootstrap event listeners; used handle extra
         * setup & teardown required after the underlying
         * modal has performed certain actions
         */

        dialog.on("hidden.bs.modal", function (e) {
            // ensure we don't accidentally intercept hidden events triggered
            // by children of the current dialog. We shouldn't anymore now BS
            // namespaces its events; but still worth doing
            if (e.target === this) {
                dialog.remove();
            }
        });

        /*
        dialog.on("show.bs.modal", function() {
          // sadly this doesn't work; show is called *just* before
          // the backdrop is added so we'd need a setTimeout hack or
          // otherwise... leaving in as would be nice
          if (options.backdrop) {
            dialog.next(".modal-backdrop").addClass("bootbox-backdrop");
          }
        });
        */

        dialog.on("shown.bs.modal", function () {
            dialog.find(".btn-primary:first").focus();
        });

        /**
         * Bootbox event listeners; experimental and may not last
         * just an attempt to decouple some behaviours from their
         * respective triggers
         */

        dialog.on("escape.close.bb", function (e) {
            if (callbacks.onEscape) {
                processCallback(e, dialog, callbacks.onEscape);
            }
        });

        /**
         * Standard jQuery event listeners; used to handle user
         * interaction with our dialog
         */

        dialog.on("click", ".modal-footer button", function (e) {
            var callbackKey = $(this).data("bb-handler");

            processCallback(e, dialog, callbacks[callbackKey]);

        });

        dialog.on("click", ".bootbox-close-button", function (e) {
            // onEscape might be falsy but that's fine; the fact is
            // if the user has managed to click the close button we
            // have to close the dialog, callback or not
            processCallback(e, dialog, callbacks.onEscape);
        });

        dialog.on("keyup", function (e) {
            if (e.which === 27) {
                dialog.trigger("escape.close.bb");
            }
        });

        // the remainder of this method simply deals with adding our
        // dialogent to the DOM, augmenting it with Bootstrap's modal
        // functionality and then giving the resulting object back
        // to our caller

        $(options.container).append(dialog);

        dialog.modal({
            backdrop: options.backdrop,
            keyboard: false,
            show: false
        });

        if (options.show) {
            dialog.modal("show");
        }

        // @TODO should we return the raw element here or should
        // we wrap it in an object on which we can expose some neater
        // methods, e.g. var d = bootbox.alert(); d.hide(); instead
        // of d.modal("hide");

        /*
         function BBDialog(elem) {
           this.elem = elem;
         }
     
         BBDialog.prototype = {
           hide: function() {
             return this.elem.modal("hide");
           },
           show: function() {
             return this.elem.modal("show");
           }
         };
         */

        return dialog;

    };

    exports.setDefaults = function () {
        var values = {};

        if (arguments.length === 2) {
            // allow passing of single key/value...
            values[arguments[0]] = arguments[1];
        } else {
            // ... and as an object too
            values = arguments[0];
        }

        $.extend(defaults, values);
    };

    exports.hideAll = function () {
        $(".bootbox").modal("hide");

        return exports;
    };


    /**
     * standard locales. Please add more according to ISO 639-1 standard. Multiple language variants are
     * unlikely to be required. If this gets too large it can be split out into separate JS files.
     */
    var locales = {
        br: {
            OK: "OK",
            CANCEL: "Cancelar",
            CONFIRM: "Sim"
        },
        cs: {
            OK: "OK",
            CANCEL: "Zrušit",
            CONFIRM: "Potvrdit"
        },
        da: {
            OK: "OK",
            CANCEL: "Annuller",
            CONFIRM: "Accepter"
        },
        de: {
            OK: "OK",
            CANCEL: "Abbrechen",
            CONFIRM: "Akzeptieren"
        },
        el: {
            OK: "Εντάξει",
            CANCEL: "Ακύρωση",
            CONFIRM: "Επιβεβαίωση"
        },
        en: {
            OK: "OK",
            CANCEL: "Cancel",
            CONFIRM: "OK"
        },
        es: {
            OK: "OK",
            CANCEL: "Cancelar",
            CONFIRM: "Aceptar"
        },
        et: {
            OK: "OK",
            CANCEL: "Katkesta",
            CONFIRM: "OK"
        },
        fi: {
            OK: "OK",
            CANCEL: "Peruuta",
            CONFIRM: "OK"
        },
        fr: {
            OK: "OK",
            CANCEL: "Annuler",
            CONFIRM: "D'accord"
        },
        he: {
            OK: "אישור",
            CANCEL: "ביטול",
            CONFIRM: "אישור"
        },
        id: {
            OK: "OK",
            CANCEL: "Batal",
            CONFIRM: "OK"
        },
        it: {
            OK: "OK",
            CANCEL: "Annulla",
            CONFIRM: "Conferma"
        },
        ja: {
            OK: "OK",
            CANCEL: "キャンセル",
            CONFIRM: "確認"
        },
        lt: {
            OK: "Gerai",
            CANCEL: "Atšaukti",
            CONFIRM: "Patvirtinti"
        },
        lv: {
            OK: "Labi",
            CANCEL: "Atcelt",
            CONFIRM: "Apstiprināt"
        },
        nl: {
            OK: "OK",
            CANCEL: "Annuleren",
            CONFIRM: "Accepteren"
        },
        no: {
            OK: "OK",
            CANCEL: "Avbryt",
            CONFIRM: "OK"
        },
        pl: {
            OK: "OK",
            CANCEL: "Anuluj",
            CONFIRM: "Potwierdź"
        },
        pt: {
            OK: "OK",
            CANCEL: "Cancelar",
            CONFIRM: "Confirmar"
        },
        ru: {
            OK: "OK",
            CANCEL: "Отмена",
            CONFIRM: "Применить"
        },
        sv: {
            OK: "OK",
            CANCEL: "Avbryt",
            CONFIRM: "OK"
        },
        tr: {
            OK: "Tamam",
            CANCEL: "İptal",
            CONFIRM: "Onayla"
        },
        zh_CN: {
            OK: "OK",
            CANCEL: "取消",
            CONFIRM: "确认"
        },
        zh_TW: {
            OK: "OK",
            CANCEL: "取消",
            CONFIRM: "確認"
        }
    };

    exports.init = function (_$) {
        return init(_$ || $);
    };

    return exports;
}));