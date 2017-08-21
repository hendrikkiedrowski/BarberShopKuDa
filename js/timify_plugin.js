"use strict";

function timeFormat(a) {
    if ("12h" === window.data.companySettings.notation) {
        var b = parseInt(a.split(":")[0]), c = a.split(":")[1], d = b >= 12 ? "PM" : "AM";
        return b = b > 12 ? b - 12 : b, (b = "00" === b ? 12 : b) + ":" + c + " " + d
    }
    return a
}

var Widget = function () {
    function a() {
        function a() {
            G = $(T).width(), H = $(T).height(), N = window.data, I = window.translations, I.partner = N.partner, J = N.companySettings, K = N.bookingSettings, M = N.country, O = N.API_URL, P = N.PROFILE_ID, localStorage.clear(), localStorage.setItem("i18n", JSON.stringify(I)), parent.window.postMessage("timify:widget:page:start", "*"), moment.locale(J.datepickerLanguage), D();
            var a = N.partnerStatus;
            if (2 === a) {
                return window.BookingRequest.getInstance().init(), void $(".widget-modal-steps").hide()
            }
            if (3 === a) {
                var b = Templates.partner_status_3();
                return $(".partner-status").remove(), void $("#outlet").append(b)
            }
            if (N.results.hasSevices = !1, N.results.offers && N.results.offers.length > 0 && (N.results.hasSevices = !0), N.results.services) for (var c in N.results.services) N.results.services.hasOwnProperty(c) && N.results.services[c].service.length > 0 && (N.results.hasSevices = !0);
            window.Services.getInstance().init(N.results), console.log(N.results), window.inFacebook && (R = !0), window.Facebook.getInstance().init(), F()
        }

        function b() {
            parent.window.postMessage("closeIframe", "*")
        }

        function c() {
            $(X).addClass("active")
        }

        function d() {
            $(V).fadeIn(300)
        }

        function e() {
            $(V).fadeOut(300)
        }

        function f() {
            $(W).addClass("active")
        }

        function g() {
            $(W).removeClass("active")
        }

        function h() {
            $(U).addClass("on")
        }

        function i() {
            $(U).removeClass("on")
        }

        function j(a) {
            S = a, $(Y).text(S)
        }

        function k() {
            return S
        }

        function l() {
            $(Z).addClass("active")
        }

        function m() {
            $(Z).removeClass("active")
        }

        function n() {
            $(_).removeClass("disable")
        }

        function o() {
            $(_).addClass("disable")
        }

        function p(a) {
            Q = a
        }

        function q(a) {
            L = a
        }

        function r() {
            return Q
        }

        function s() {
            return I
        }

        function t() {
            return P
        }

        function u() {
            return M
        }

        function v() {
            return O
        }

        function w() {
            return N
        }

        function x() {
            return J
        }

        function y() {
            return K
        }

        function z() {
            return G
        }

        function A() {
            return H
        }

        function B() {
            return $(U).height()
        }

        function C() {
            return L
        }

        function D() {
            $(aa).hide()
        }

        function E() {
            return R
        }

        function F() {
            var a = Steps.getInstance();
            $(document).on("click", Z, a.backward), $(document).on("click", _, b), $(document).on("click", "body", function (a) {
                "BODY" === a.target.tagName && b()
            })
        }

        var G, H, I, J, K, L, M, N, O, P, Q = !1, R = !1, S = 1, T = "#widget-modal", U = ".widget-modal-top",
            V = ".widget-modal-loading", W = ".widget-modal-overflow-marker", X = ".widget-modal-error-box",
            Y = ".widget-modal-current-step", Z = ".widget-modal-back-btn", _ = ".close-widget-btn",
            aa = ".private-mode-message";
        return {
            init: a,
            close: b,
            showErrorBox: c,
            showLoader: d,
            hideLoader: e,
            showOverflow: f,
            hideOverflow: g,
            expandHeader: h,
            collapsHeader: i,
            getHeaderHeight: B,
            setStep: j,
            getStep: k,
            showBackButton: l,
            hideBackButton: m,
            showCloseButton: n,
            hideCloseButton: o,
            setIsLoggedIn: p,
            getIsLoggedIn: r,
            setAvailability: q,
            getAvailability: C,
            getIsFacebookIntegrated: E,
            getTranslations: s,
            getProfileId: t,
            getApiUrl: v,
            getApiData: w,
            getCompanySettings: x,
            getBookingSettings: y,
            getCountry: u,
            getWidth: z,
            getHeight: A
        }
    }

    var b;
    return {
        getInstance: function () {
            return b || (b = a()), b
        }
    }
}();
$(function () {
    Widget.getInstance().init()
}), Handlebars.registerHelper("i18n", function (a) {
    var b = localStorage.getItem("i18n");
    return _.deepGet(JSON.parse(b), a)
}), Handlebars.registerHelper("ifequal", function (a, b, c) {
    return a === b ? c.fn(this) : c.inverse(this)
});
var GuestBooking = function () {
    function a() {
        function a(a) {
            g()
        }

        function b(a) {
            a.preventDefault();
            var b, d = $(n).find("#guest-booking-first-name").val(), e = $(n).find("#guest-booking-last-name").val(),
                f = $(n).find("#guest-booking-email").val().replace(/^\s+|\s+$/g, ""),
                g = new RegExp(/^([\w\.\+\-]+)@([\w\-]+)((\.(\w){2,10})+)$/i),
                o = $(n).find('[name="country-code"]').val(), p = $(n).find('[name="phone"]').val(), q = o + p,
                r = $(n).find('[name="country-text"]').val(), s = $(n).find(".ta-checkbox").hasClass("active");
            if ($(n).find(".message.error").hide(), $(n).find(".message.error span").hide(), $(n).find(".form-group").removeClass("error"), s || ($(n).find(".error-terms").show(), b = !0), (!d || d.length < 2) && ($(n).find(".error-first-name").show(), $(n).find("#guest-booking-first-name").closest(".form-group").addClass("error"), b = !0), (!e || e.length < 2) && ($(n).find(".error-last-name").show(), $(n).find("#guest-booking-last-name").closest(".form-group").addClass("error"), b = !0), g.test(f) || ($(n).find(".error-email").show(), $(n).find("#guest-booking-email").closest(".form-group").addClass("error"), b = !0), p || ($(n).find(".error-phone").show(), $(n).find('[name="phone"]').closest(".form-group").addClass("error"), b = !0), b) return void $(n).find(".message.error").fadeIn(200);
            h = !0, i = d, j = e, k = f, l = q, m = r, c()
        }

        function c() {
            Steps.getInstance().goToConfirm()
        }

        function d() {
            return h
        }

        function e() {
            h = null, i = null, j = null, k = null, l = null, m = null
        }

        function f() {
            return {firstName: i, lastName: j, email: k, phoneNumber: l, phoneCountry: m}
        }

        function g() {
            $(document).off("click", o), $(document).on("click", o, b)
        }

        var h, i, j, k, l, m, n = "#step-4-guest-booking form", o = "#widget-modal-guest-booking-btn";
        return {init: a, isActive: d, getData: f, reset: e}
    }

    var b;
    return {
        getInstance: function () {
            return b || (b = a()), b
        }
    }
}(), Auth = function () {
    function a() {
        function a() {
            var a = window.Widget.getInstance(), b = a.getApiData(), c = a.getIsFacebookIntegrated(),
                d = a.getCompanySettings(), e = Templates.step3_timify();
            d.facebookAuth && (e = Templates.step3_timify_facebook()), d.guestBooking && (e = Templates.step3_timify_guest()), d.guestBooking && d.facebookAuth && (e = Templates.step3_timify_facebook_guest()), c && (e = Templates.step3_timify_facebook()), c && d.guestBooking && (e = Templates.step3_timify_facebook_guest()), $("#step-3").remove(), $("#outlet").append(e);
            var f = Templates.step4();
            $("#step-4").remove(), $("#outlet").append(f), window.GuestBooking.getInstance().init();
            var g = Templates.step4_guest_booking({
                company: b.companySettings,
                companies: b.countryCodes,
                partner: b.partner
            });
            $("#step-4-guest-booking").remove(), $("#outlet").append(g);
            var h = Templates.step5({company: b.companySettings, companies: b.countryCodes, partner: b.partner});
            $("#step-5").remove(), $("#outlet").append(h), window.Forms.getInstance().init(), M()
        }

        function b(a) {
            var b = window.Widget.getInstance();
            a.name && (a.firstName = a.name, a.firstLast = ""), a.name && a.name.indexOf(" ") > -1 && (a.firstName = a.name.split(" ")[0], a.lastName = a.name.split(" ")[1]);
            var c = Templates.step5_facebook({
                company: b.getApiData().companySettings,
                companies: b.getApiData().countryCodes,
                data: a
            });
            $("#step-5").remove(), $("#outlet").append(c), window.Forms.getInstance().init(), k(), b.hideLoader(), M()
        }

        function c() {
            $(P).hide().removeClass("active"), $(V).hide().removeClass("active"), $(Z).hide().removeClass("active"), $(ia).hide().removeClass("active"), L()
        }

        function d() {
            var a = Widget.getInstance(), b = 30;
            a.getWidth() < 500 && (b = 20);
            var c = a.getHeaderHeight(), d = a.getHeight(), e = BookingInfo.getInstance(), f = e.getHeight(),
                g = $(Q).height(), h = $(R).height(), i = d - (c + f + h), j = (i - g) / 2, k = j + f - b;
            $(Q).css({"padding-top": k})
        }

        function e() {
            $(V).addClass("active"), L(), Widget.getInstance().hideCloseButton()
        }

        function f() {
            $(V).removeClass("active"), Widget.getInstance().showCloseButton(), O && I()
        }

        function g(a) {
            a.preventDefault();
            var b = Widget.getInstance();
            b.showLoader();
            var c = $("#login-username").val(), d = $("#login-password").val(), e = b.getApiUrl();
            $.ajax({
                type: "POST",
                url: e + "/oauth/token",
                contentType: "application/x-www-form-urlencoded",
                data: {grant_type: "password", client_id: "mobile", username: c, password: d},
                success: h,
                error: i
            })
        }

        function h(a) {
            localStorage.setItem("user-token", a.access_token), Widget.getInstance().setIsLoggedIn(a.access_token), $(V).find(".message.error").fadeOut(200), Steps.getInstance().goToConfirm()
        }

        function i(a) {
            Widget.getInstance().hideLoader(), 400 !== a.status && 422 !== a.status || ($(V).find(".message.error span").hide(), $(V).find(".message.error span.error-bad-credentials").show(), $(V).find(".message.error").fadeIn(200))
        }

        function j() {
            $(V).removeClass("prepare"), L(), O || $(Z).addClass("prepare"), setTimeout(function () {
                $(".widget-modal-auth").removeClass("pull-login-form"), $(".widget-modal-auth").addClass("pull-registration-form active pull-mode"), O = !0
            }, 100)
        }

        function k() {
            $(Z).addClass("active"), L(), z(), G(), Widget.getInstance().hideCloseButton()
        }

        function l() {
            $(Z).removeClass("active"), Widget.getInstance().showCloseButton(), O && I()
        }

        function m(a) {
            if (a.preventDefault(), $(".widget-modal-register-box").hasClass("widget-modal-facebook-register-box")) return void n(a);
            q(a)
        }

        function n(a) {
            a.preventDefault();
            var b = Widget.getInstance();
            b.showLoader();
            var c = $('.widget-modal-facebook-register-box input[name="fbid"]').val(),
                d = $('.widget-modal-facebook-register-box input[name="register-first-name"]').val(),
                e = $('.widget-modal-facebook-register-box input[name="register-last-name"]').val(),
                f = $('.widget-modal-facebook-register-box input[name="register-user-email"]').val().replace(/^\s+|\s+$/g, ""),
                g = $('.widget-modal-facebook-register-box [name="country-code"]').val(),
                h = $('.widget-modal-facebook-register-box [name="phone"]').val(), i = g + h,
                j = $(_).find('[name="country-text"]').val(),
                k = $(".widget-modal-facebook-register-box .ta-checkbox").hasClass("active");
            b.getApiUrl();
            return N = i, $(Z).find(".message.error span").hide(), $(Z).find(".message.error").hide(), $(Z).find(".form-group").removeClass("error"), h ? k ? void $.ajax({
                type: "POST",
                url: "/fbapp/registration",
                data: {
                    fbId: c,
                    firstName: d,
                    lastName: e,
                    email: encodeURIComponent(f),
                    phoneNumber: i,
                    phoneCountry: j
                },
                success: o,
                error: p
            }) : ($(Z).find(".error-terms").show(), $(Z).find(".message.error").show(), void b.hideLoader()) : ($(Z).find(".error-phone").show(), $(Z).find(".message.error").show(), $(Z).find('input[name="phone"]').closest(".form-group").addClass("error"), void b.hideLoader())
        }

        function o() {
            window.Facebook.getInstance().login()
        }

        function p(a) {
            switch ($(Z).find(".message.error").hide(), $(Z).find(".message.error span").hide(), $(Z).find(".form-group").removeClass("error"), a.responseJSON[0].paths[0]) {
                case"/first_name":
                    $(Z).find(".error-first-name").show(), $(Z).find('input[name="register-first-name"]').closest(".form-group").addClass("error");
                    break;
                case"/last_name":
                    $(Z).find(".error-last-name").show(), $(Z).find('input[name="register-last-name"]').closest(".form-group").addClass("error")
            }
            $(Z).find(".message.error").fadeIn(200), Widget.getInstance().hideLoader()
        }

        function q(a) {
            a.preventDefault();
            var b = Widget.getInstance();
            b.showLoader();
            var c = $("#register-first-name").val(), d = $("#register-last-name").val(),
                e = $(_).find('[name="country-code"]').val(), f = $(_).find('[name="phone"]').val(), g = e + f,
                h = $(_).find('[name="country-text"]').val(), i = $("#register-username").val(),
                j = $("#register-password").val(), k = $(".widget-modal-register-box .ta-checkbox").hasClass("active"),
                l = b.getApiUrl();
            if (!k) return b.hideLoader(), void w();
            N = g, $.ajax({
                type: "POST",
                url: l + "/accounts",
                data: JSON.stringify({
                    data: {
                        type: "accounts",
                        scope: "private",
                        "first-name": c,
                        "last-name": d,
                        "phone-number": g,
                        "phone-country": h,
                        email: i,
                        password: j
                    }
                }),
                contentType: "application/vnd.terminapp.1+json",
                processData: !1,
                success: r,
                error: s,
                statusCode: {404: t, 409: v, 415: u, 422: v}
            })
        }

        function r() {
            $("#phone-nr-text").html(N), $(Z).find(".message.error").fadeOut(200), y(), Widget.getInstance().hideLoader()
        }

        function s() {
            setTimeout(function () {
                Widget.getInstance().hideLoader()
            }, 500)
        }

        function t() {
            alert("Page not found")
        }

        function u() {
            alert("Please, try again later")
        }

        function v(a) {
            var b = JSON.parse(a.responseText), c = ".message.error span.error-phone";
            b.errors[0].paths[0] && (c = ".message.error span.error" + b.errors[0].paths[0].replace("/data/", "-")), setTimeout(function () {
                $(Z).find(".message.error span").hide(), $(Z).find(c).show(), $(Z).find(".message.error").fadeIn(200)
            }, 500)
        }

        function w() {
            $(Z).find(".message.error span").hide(), $(Z).find(".message.error span.error-terms").show(), $(Z).find(".message.error").fadeIn(200)
        }

        function x() {
            $(Z).removeClass("prepare"), L(), O || $(V).addClass("prepare"), setTimeout(function () {
                $(".widget-modal-auth").removeClass("pull-registration-form"), $(".widget-modal-auth").addClass("pull-login-form active pull-mode"), O = !0
            }, 100)
        }

        function y() {
            $(da).addClass("active")
        }

        function z() {
            $(da).removeClass("active")
        }

        function A() {
            var a = Widget.getInstance(), b = a.getApiUrl(), c = $("#register-username").val(),
                d = $("#register-password").val();
            $.ajax({
                type: "POST",
                url: b + "/oauth/token",
                data: {grant_type: "password", client_id: "mobile", username: c, password: d},
                contentType: "application/x-www-form-urlencoded",
                success: B,
                error: C
            })
        }

        function B(a) {
            var b = $("#smsCode").val(), c = a.access_token;
            localStorage.setItem("user-token", a.access_token);
            var d = Widget.getInstance(), e = d.getApiUrl();
            d.showLoader(), $.ajax({
                type: "POST", url: e + "/accounts/me/verification", beforeSend: function (a) {
                    a.setRequestHeader("Authorization", "Bearer " + c)
                }, data: {verification_code: b}, success: D, error: E
            })
        }

        function C() {
            Widget.getInstance().hideLoader()
        }

        function D(a) {
            if (!0 === a.success) {
                Steps.getInstance().goToConfirm()
            } else E()
        }

        function E() {
            var a = Widget.getInstance();
            a.hideLoader(), alert(a.getTranslations().register.errors.verify)
        }

        function F() {
            y(), $(fa).fadeIn(500)
        }

        function G() {
            $(fa).fadeOut(500)
        }

        function H() {
        }

        function I() {
            O = !1, $(".widget-modal-auth").addClass("pull-mode-off"), setTimeout(function () {
                $(".widget-modal-auth").removeClass("pull-mode pull-mode-off pull-registration-form pull-login-form active prepare")
            }, 100)
        }

        function J() {
            $(this).hasClass("disabled") || (L(), $(ia).addClass("active"), Widget.getInstance().hideCloseButton())
        }

        function K() {
            $(ia).removeClass("active"), Widget.getInstance().showCloseButton()
        }

        function L() {
            $(V).find(".message.error span").hide(), $(V).find(".message.error").fadeOut(200), $(Z).find(".message.error span").hide(), $(Z).find(".message.error").fadeOut(200), $(ia).find(".form-group.error").removeClass("error"), $(ia).find(".message.error span").hide(), $(ia).find(".message.error").fadeOut(200)
        }

        function M() {
            $(document).off("click", S), $(document).on("click", S, e), $(document).off("click", W), $(document).on("click", W, f), $(document).off("click", X), $(document).on("click", X, g), $(document).off("click", Y), $(document).on("click", Y, j), $(document).off("click", T), $(document).on("click", T, k), $(document).off("click", aa), $(document).on("click", aa, l), $(document).off("click", ba), $(document).on("click", ba, m), $(document).off("click", ca), $(document).on("click", ca, x), $(document).off("click", ea), $(document).on("click", ea, A), $(document).off("click", ga), $(document).on("click", ga, H), $(document).off("click", ha), $(document).on("click", ha, F), $(document).off("click", U), $(document).on("click", U, J), $(document).off("click", ja), $(document).on("click", ja, K)
        }

        var N = !1, O = !1, P = "#step-3", Q = ".widget-modal-almost-there", R = ".widget-modal-almost-there-buttons",
            S = "#widger-modal-login-btn", T = "#widger-modal-register-btn", U = "#widger-modal-guest-btn",
            V = "#step-4", W = "#step-4 .widget-modal-auth-close", X = "#widget-modal-loginbox-login-btn",
            Y = "#widget-modal-auth-loginbox-register-btn", Z = "#step-5", _ = ".widget-modal-register-box form",
            aa = "#step-5 .widget-modal-auth-close", ba = "#widget-modal-register-btn",
            ca = "#widget-modal-auth-registerbox-login-btn", da = ".widget-modal-verifycode-box",
            ea = "#widget-modal-verifyaccount-btn", fa = "#step-5 .widget-modal-newmobilenumber-box",
            ga = "#widget-modal-save-newphonenumber-btn", ha = "#widget-modal-changenumber-btn",
            ia = "#step-4-guest-booking", ja = "#step-4-guest-booking .widget-modal-auth-close";
        return {init: a, facebookInit: b, hide: c, setContentPosition: d}
    }

    var b;
    return {
        getInstance: function () {
            return b || (b = a()), b
        }, deleteInstance: function () {
            b = null
        }
    }
}(), BookingInfo = function () {
    function a() {
        function a() {
            var a = d();
            $(f).html(a), e = c(), $(f).css("top", -e), $(f).addClass("active")
        }

        function b() {
            $(f).removeClass("active")
        }

        function c() {
            return $(f).height()
        }

        function d() {
            var a, b, c = '<ul class="list-unstyled">', d = Steps.getInstance(), e = d.getActive(),
                f = Widget.getInstance();
            f.getTranslations();
            return localStorage.getItem("selected-title") && (a = localStorage.getItem("selected-title"), localStorage.getItem("selected-duration") && (b = "<span>(" + localStorage.getItem("selected-duration") + ")</span>"), c += '<li><i class="fa fa-list"></i>' + a + b + "</li>"), "2" === e ? c += "</ul>" : (localStorage.getItem("selected-date-formated") && (a = localStorage.getItem("selected-date-formated"), c += '<li><i class="fa fa-calendar"></i>' + a + "</li>"), localStorage.getItem("selected-time") && (a = window.timeFormat(localStorage.getItem("selected-time")), c += '<li><i class="fa fa-clock-o"></i>' + a + "</li>"), localStorage.getItem("selected-employee-name") && (a = localStorage.getItem("selected-employee-name"), c += '<li><i class="fa fa-user"></i>' + a + "</li>"), localStorage.getItem("selected-price") && (a = localStorage.getItem("selected-price"), c += '<li><i class="fa fa-money"></i>' + a + "</li>"), localStorage.getItem("selected-available-slots") && (a = localStorage.getItem("selected-available-slots"), c += '<li><i class="fa fa-users"></i>' + a + "</li>"), c += "</ul>")
        }

        var e = 0, f = ".widget-modal-booking-info";
        return {show: a, hide: b, getHeight: c}
    }

    var b;
    return {
        getInstance: function () {
            return b || (b = a()), b
        }
    }
}(), BookingRequest = function () {
    function a() {
        function a() {
            var a = window.Widget.getInstance(), c = "partner_status_2", d = a.getApiData();
            "das-telefonbuch" === d.short && (c = "dastelefonbuch_status_2"), "fcr-media" === d.partnerName && (c = "fcr_status_2");
            var e = Templates[c]({company: d.companySettings, companies: d.countryCodes});
            $(".partner-status").remove(), $("#outlet").append(e), window.Forms.getInstance().init(), b(), l()
        }

        function b() {
            var a = Widget.getInstance(), b = "DD, " + a.getCompanySettings().dateFormat,
                c = a.getCompanySettings().datepickerLanguage;
            $.datepicker.setDefaults($.datepicker.regional[c]), $(n).datepicker({
                showButtonPanel: !0,
                closeText: "Close",
                showOtherMonths: !0,
                minDate: 0,
                dateFormat: b
            })
        }

        function c(a) {
            a.preventDefault(), h();
            var b = i();
            if (!(b.email && b.message && b.firstName && b.lastName && b.date && b.phoneNumber)) return void g("required");
            if (!new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i).test(b.email)) return void g("email");
            if (!b.terms) return void g("terms");
            var c = j(b);
            $.ajax({
                type: "POST",
                url: "/requestbooking",
                data: JSON.stringify({data: c}),
                contentType: "application/vnd.terminapp.1+json",
                processData: !1,
                beforeSend: d,
                success: e,
                error: f
            })
        }

        function d() {
            Widget.getInstance().showLoader()
        }

        function e(a) {
            a.success && setTimeout(function () {
                var a = Templates.requestbooking_success();
                $("#requestbooking-success").remove(), $(".partner-status-2").remove(), $("#outlet").append(a), Widget.getInstance().hideLoader()
            }, 300)
        }

        function f() {
            Widget.getInstance().hideLoader()
        }

        function g(a) {
            switch (a) {
                case"email":
                    $(m).find(".message.error .error-wrong-email").show();
                    break;
                case"terms":
                    $(m).find(".message.error .error-terms").show();
                    break;
                case"required":
                    $(m).find(".message.error .error-fields-required").show()
            }
            $(m).find(".message.error").show(), $(m).find('[name="' + a + '"]').closest(".form-group").addClass("error")
        }

        function h() {
            $(m).find(".message.error").hide(), $(m).find(".message.error span").hide(), $(m).find(".form-group").removeClass("error")
        }

        function i() {
            var a = Widget.getInstance(), b = {};
            return b.firstName = $(m).find('[name="firstName"]').val(), b.lastName = $(m).find('[name="lastName"]').val(), b.phoneNumber = $(m).find('[name="phone"]').val(), b.phoneCode = $(m).find('[name="country-code"]').val(), b.phoneCountry = $(m).find('[name="country-text"]').val(), b.email = $(m).find('[name="email"]').val(), b.date = $(m).find('[name="date"]').val(), b.time = "", b.message = $(m).find('[name="message"]').val(), b.terms = $(m).find('[name="terms"]').is(":checked"), b.token = a.getApiData().token, b
        }

        function j(a) {
            var b = Widget.getInstance(), c = {};
            return c.email = a.email, c.message = a.message, c.sid = b.getApiData().smbid, c["partner-id"] = b.getApiData().partnerId, c.token = a.token, a.firstName && (c["first-name"] = a.firstName), a.lastName && (c["last-name"] = a.lastName), a.date && (c.date = a.date), a.time && (c.time = a.time), a.phoneNumber && (c["phone-number"] = a.phoneCode + a.phoneNumber, c["phone-country"] = a.phoneCountry), c
        }

        function k(a) {
            a.preventDefault(), Widget.getInstance().showLoader(), setTimeout(function () {
                location.reload()
            }, 500)
        }

        function l() {
            $(document).off("click", o), $(document).on("click", o, c), $(document).off("click", p), $(document).on("click", p, k)
        }

        var m = "#request-booking", n = "#datepicker", o = "#request-booking .btn", p = "#new-requestbooking";
        return {init: a}
    }

    var b;
    return {
        getInstance: function () {
            return b || (b = a()), b
        }
    }
}(), Calendar = function () {
    function a() {
        function a() {
            var a = Widget.getInstance(), b = JSON.parse(localStorage.getItem("unavailable-slots")) || [],
                c = "DD, " + a.getCompanySettings().dateFormat, d = a.getCompanySettings().firstDay,
                e = a.getCompanySettings().datepickerLanguage, f = a.getApiData().datepickerOverrideLanguage;
            f && (e = f);
            var g = a.getBookingSettings().availability, h = new Date;
            h.setMonth(h.getMonth() + g), $.datepicker.setDefaults($.datepicker.regional[e]), $(k).datepicker({
                beforeShowDay: function (a) {
                    var c = moment(new Date(a)).format("YYYY-MM-DD");
                    return [-1 === b.indexOf(c)]
                }, showButtonPanel: !0, showOtherMonths: !0, firstDay: d, minDate: 0, maxDate: h, dateFormat: c
            }), j()
        }

        function b(a) {
            $(k).datepicker("setDate", a), localStorage.setItem("selected-date", a);
            var b = d(), c = b.split(", ");
            c = "<strong>" + c[0] + ",</strong> " + c[1], $(l).find("span").html(c), $(l).data("date", b)
        }

        function c() {
            return new Date($(k).datepicker("getDate"))
        }

        function d() {
            return $(k).val()
        }

        function e() {
            return localStorage.getItem("selected-date")
        }

        function f() {
            $(k).focus().blur()
        }

        function g() {
            b(c());
            var a = localStorage.getItem("selected-employee-id"), d = c();
            Timeslots.getInstance().update(d, a)
        }

        function h(a) {
            a.preventDefault();
            var b = c();
            b.toJSON().slice(0, 10) === (new Date).toJSON().slice(0, 10) && $(m).addClass("disabled"), b.toJSON().slice(0, 10) < (new Date).toJSON().slice(0, 10) || (b.setDate(b.getDate() - 1), $(k).datepicker("setDate", b), g())
        }

        function i(a) {
            a.preventDefault(), $(m).removeClass("disabled");
            var b = new Date($(k).datepicker("getDate"));
            b.setDate(b.getDate() + 1), $(k).datepicker("setDate", b), g()
        }

        function j() {
            $(document).off("change", k), $(document).on("change", k, g), $(document).off("click", l), $(document).on("click", l, f), $(document).off("click", m), $(document).on("click", m, h), $(document).off("click", n), $(document).on("click", n, i)
        }

        var k = "#datepicker", l = ".widget-modal-callendar-btn", m = ".widget-modal-callendar-prev-day",
            n = ".widget-modal-callendar-next-day";
        return {init: a, set: b, getValue: d, getDate: c, getSelected: e, update: g}
    }

    var b;
    return {
        getInstance: function () {
            return b || (b = a()), b
        }, deleteInstance: function () {
            b = null
        }
    }
}(), Confirm = function () {
    function a() {
        function a(a) {
            var c = b(), e = Templates.step6(c);
            $("#step-6").remove(), $("#outlet").append(e), d()
        }

        function b() {
            var a, b, c, d = [], e = Widget.getInstance();
            e.getTranslations();
            return localStorage.getItem("selected-title") && (a = "fa fa-list", b = localStorage.getItem("selected-title"), c = !1, localStorage.getItem("selected-duration") && (c = "(" + localStorage.getItem("selected-duration") + ")"), d.push({
                icon: a,
                text: b,
                extras: c
            })), localStorage.getItem("selected-date-formated") && (a = "fa fa-calendar", b = localStorage.getItem("selected-date-formated"), c = !1, d.push({
                icon: a,
                text: b,
                extras: c
            })), localStorage.getItem("selected-time") && (a = "fa fa-clock-o", b = window.timeFormat(localStorage.getItem("selected-time")), c = !1, d.push({
                icon: a,
                text: b,
                extras: c
            })), localStorage.getItem("selected-employee-name") && (a = "fa fa-user", b = localStorage.getItem("selected-employee-name"), c = !1, d.push({
                icon: a,
                text: b,
                extras: c
            })), localStorage.getItem("selected-price") && (a = "fa fa-money", b = localStorage.getItem("selected-price"), c = !1, d.push({
                icon: a,
                text: b,
                extras: c
            })), localStorage.getItem("selected-available-slots") && (a = "fa fa-users", b = localStorage.getItem("selected-available-slots"), c = !1, d.push({
                icon: a,
                text: b,
                extras: c
            })), d
        }

        function c() {
            Steps.getInstance().goToSuccess()
        }

        function d() {
            $(document).off("click", e), $(document).on("click", e, c)
        }

        var e = "#widget-modal-confirmbooking-btn";
        return {init: a}
    }

    var b;
    return {
        getInstance: function () {
            return b || (b = a()), b
        }
    }
}(), Employees = function () {
    function a() {
        function a(a) {
            var b = $(n).height() + 40;
            $(m).height(b), g()
        }

        function b() {
            var a = Steps.getInstance();
            clearTimeout(a.timeout), $(k).removeClass("active"), $(this).addClass("active");
            var b = $(this).data("employee-id");
            localStorage.setItem("selected-employee-id", b), setTimeout(function () {
                e()
            }, 500);
            var c = Calendar.getInstance(), d = c.getDate();
            Timeslots.getInstance().update(d, b);
            var f = $(this).hasClass("widget-modal-employee-all"),
                g = $(this).find(".widger-modal-employee-img").data("background-color"),
                h = $(this).find(".widger-modal-employee-img img").attr("src"),
                m = $(this).find(".widger-modal-employee-title").text(), n = Widget.getInstance();
            if (f) return $(l).find(".widget-modal-employees-selected").removeAttr("style"), $(l).find(".widget-modal-employees-all span").text(n.getTranslations().employees.all), $(l).removeClass("prepare prepare-text active"), $(j).removeClass("selected"), i = !1, !1;
            i = !0, $(l).find(".widget-modal-employees-all span").text(n.getTranslations().employees.choose), $(l).find(".widget-modal-employees-selected span").text(m), $(l).addClass("prepare-text"), h && $(l).find(".widget-modal-employees-selected img").show().attr({
                src: h,
                alt: m
            }), setTimeout(function () {
                $(l).addClass("prepare")
            }, 100), setTimeout(function () {
                $(j).addClass("selected"), $(l).addClass("active"), h || ($(l).find(".widget-modal-employees-selected img").hide(), $(l).find(".widget-modal-employees-selected").css({
                    "background-color": g,
                    "background-image": "url(/assets/images/avatar_default.png)"
                }))
            }, 500)
        }

        function c() {
            h = !1, i = !1
        }

        function d() {
            if ($(j).hasClass("one-employee")) return !1;
            i && ($(l).removeClass("active"), $(j).removeClass("selected"), setTimeout(function () {
                $(l).removeClass("prepare")
            }, 300), setTimeout(function () {
                $(l).removeClass("prepare-text")
            }, 800)), $(j).removeClass("unactive"), $(l).find(".widget-modal-employees-selected").hide(), h = !0, Widget.getInstance().showOverflow()
        }

        function e() {
            i && ($(l).addClass("prepare prepare-text"), $(j).addClass("selected"), setTimeout(function () {
                $(l).addClass("active")
            }, 300)), $(j).addClass("unactive"), setTimeout(function () {
                $(l).find(".widget-modal-employees-selected").show()
            }, 800), h = !1, Widget.getInstance().hideOverflow()
        }

        function f() {
            var a = Steps.getInstance();
            if (clearTimeout(a.timeout), h) return void e();
            d()
        }

        function g() {
            $(document).off("click", o), $(document).on("click", o, f), $(document).off("click", k), $(document).on("click", k, b)
        }

        var h = !0, i = !1, j = ".widget-modal-employees", k = ".widger-modal-employee",
            l = ".widget-modal-employees-title", m = ".widget-modal-employees-body",
            n = ".widget-modal-employees-body ul", o = ".widget-modal-employees-title a";
        return {init: a, show: d, hide: e, reset: c}
    }

    var b;
    return {
        getInstance: function () {
            return b || (b = a()), b
        }, deleteInstance: function () {
            b = null
        }
    }
}(), Facebook = function () {
    function a() {
        function a(a) {
            window.fbAsyncInit = function () {
                window.FB.init({appId: "256386574536637", xfbml: !0, status: !0, version: "v2.8"})
            }, function (a, b, c) {
                var d, e = a.getElementsByTagName(b)[0];
                a.getElementById(c) || (d = a.createElement(b), d.id = c, d.src = "//connect.facebook.net/en_US/sdk.js", e.parentNode.insertBefore(d, e))
            }(document, "script", "facebook-jssdk"), e()
        }

        function b() {
            var a = Widget.getInstance();
            a.showLoader(), window.FB.getLoginStatus(function (d) {
                "connected" == d.status ? (i = d.authResponse.accessToken, $.ajax({
                    type: "POST",
                    url: "/fbapp/access-token",
                    data: {userAccessToken: i},
                    success: function (b) {
                        if (b.access_token) {
                            localStorage.setItem("user-token", b.access_token), a.setIsLoggedIn(b.access_token), a.hideLoader();
                            Steps.getInstance().goToConfirm()
                        }
                    },
                    error: function (a) {
                        c(d)
                    }
                })) : window.FB.login(function (c) {
                    if ("connected" == c.status) return void b();
                    a.hideLoader()
                }, {scope: "email"})
            })
        }

        function c(a) {
            "connected" == a.status && window.FB.api("/me?fields=id,name,email", function (a) {
                f = a.id, a.email && (h = a.email), a.name && (g = a.name), Auth.getInstance().facebookInit(d())
            })
        }

        function d() {
            return {facebookId: f, email: h, name: g}
        }

        function e() {
            $(document).off("click", "#widger-modal-facebook-login-btn"), $(document).on("click", "#widger-modal-facebook-login-btn", b)
        }

        var f, g, h, i;
        return {init: a, login: b, getData: d}
    }

    var b;
    return {
        getInstance: function () {
            return b || (b = a()), b
        }
    }
}(), Services = function () {
    function a() {
        function a(a) {
            var b = Templates.step1(a);
            $("#outlet").append(b), n()
        }

        function b() {
            var a = {};
            a.id = $(this).data("id"), a.type = $(this).data("type"), a.duration = $(this).data("duration"), a.price = $(this).data("price"), a.title = $(this).find(".ta-services__title").text(), localStorage.setItem("selected-main-id", a.id), localStorage.setItem("selected-id", a.id), localStorage.setItem("selected-type", a.type), localStorage.setItem("selected-duration", a.duration), localStorage.setItem("selected-price", a.price), localStorage.setItem("selected-title", a.title), h()
        }

        function c() {
            $(o).removeClass("active")
        }

        function d(a, b) {
            return "service" === b ? e(a) : "course" === b && f(a)
        }

        function e(a) {
            var b = {employees: [], timeslots: []}, c = [];
            for (var d in a) if (a.hasOwnProperty(d)) {
                var e = k(a[d].name), f = l(e), g = m(a[d]["avatar-url"]);
                b.employees[d] = {
                    id: a[d].id,
                    calendarId: a[d].links.calendar.id,
                    name: a[d].name,
                    hasAvatar: g.available,
                    image: g.image,
                    initials: e,
                    backgroundColor: f,
                    availabilityTimes: a[d]["availability-times"]
                };
                for (var h in a[d]["availability-times"]) if (a[d]["availability-times"].hasOwnProperty(h)) {
                    var n = {};
                    n.slot = a[d]["availability-times"][h].from, n.text = window.timeFormat(a[d]["availability-times"][h].from), n.calendarId = a[d].links.calendar.id, n.employeeId = a[d].id, n.employeeName = a[d].name;
                    var o = i(n, c);
                    if (!o) {
                        var p = j(n, c);
                        c.splice(p, 0, n)
                    }
                }
            }
            return b.timeslots = c, b
        }

        function f(a) {
            var b = [], c = Widget.getInstance(), d = c.getCompanySettings().timezone,
                e = "dd, " + c.getCompanySettings().dateFormat.toUpperCase();
            e = e.replace("YY", "YYYY"), a.sort(g);
            for (var f in a) if (a.hasOwnProperty(f)) {
                var h = k(a[f]["booking-employee-name"]), i = l(h), j = m(a[f]["booking-employee-avatar-url"]),
                    n = moment(a[f].date).tz(d).format("HH:mm");
                b.push({
                    initials: h,
                    backgroundColor: i,
                    bookingId: a[f]["booking-id"],
                    date: moment(new Date(a[f].date)).format(e),
                    time: window.timeFormat(n),
                    timeNotFormatted: n,
                    availableSlots: a[f]["available-slots"],
                    availableBookings: a[f]["available-bookings"],
                    totalSlots: a[f]["attendees-limit"],
                    employee: {hasAvatar: j.available, avatar: j.image, name: a[f]["booking-employee-name"]}
                })
            }
            return b
        }

        function g(a, b) {
            return new Date(a.date) - new Date(b.date)
        }

        function h() {
            var a = localStorage.getItem("selected-type"), b = Steps.getInstance();
            switch (a) {
                case"course":
                case"offer-course":
                    b.goToCourseTimeslots();
                    break;
                default:
                    b.goToTimeslots()
            }
        }

        function i(a, b) {
            var c = !1;
            return $.each(b, function (b, d) {
                d.slot === a.slot && (c = !0)
            }), c
        }

        function j(a, b) {
            for (var c in b) if (b.hasOwnProperty(c)) {
                var d = moment("2000-01-01T" + b[c].slot + ":00Z").unix(),
                    e = moment("2000-01-01T" + a.slot + ":00Z").unix();
                if (d > e) return c
            }
            return b.length
        }

        function k(a) {
            var b = "";
            return a.split(" ").forEach(function (a) {
                a && (b += a[0].toUpperCase())
            }), b
        }

        function l(a) {
            return a ? "#" + md5(a).substring(0, 6) : "#1B3045"
        }

        function m(a) {
            var b = {available: !1, image: "/assets/images/avatar_default.png"};
            return a && (b.available = !0, b.image = a), b
        }

        function n() {
            $(document).off("click", o), $(document).on("click", o, b)
        }

        var o = ".ta-services li";
        return {init: a, reset: c, prepareData: d, nextStep: h}
    }

    var b;
    return {
        getInstance: function () {
            return b || (b = a()), b
        }
    }
}(), Steps = function () {
    function a() {
        function a() {
            return $(u).attr("id").split("-")[1]
        }

        function b() {
            var a = Widget.getInstance();
            a.showLoader(), a.setStep(2);
            var b = a.getApiUrl(), e = localStorage.getItem("selected-id"), f = new Date,
                g = moment(new Date(f)).format("YYYY-MM-DD");
            localStorage.setItem("selected-date", f), $.ajax({
                type: "GET",
                url: b + "/search/availability?serviceId=" + e,
                contentType: "application/vnd.terminapp.1+json",
                processData: !1,
                success: function (f) {
                    a.setAvailability(f.data), $.ajax({
                        type: "GET",
                        url: b + "/search/employees?serviceId=" + e + "&date=" + g,
                        contentType: "application/vnd.terminapp.1+json",
                        processData: !1,
                        success: c,
                        error: d
                    })
                },
                error: d
            })
        }

        function c(a) {
            var b = Services.getInstance(), c = b.prepareData(a.data, "service"),
                d = localStorage.getItem("selected-id");
            localStorage.setItem("selected-company-id", a.data[0].links.company.id), Timeslots.getInstance().init(c, "service");
            var e = Widget.getInstance(),
                f = (e.getBookingSettings()["lead-time"], localStorage.getItem("selected-date")),
                g = Calendar.getInstance();
            g.init(), g.set(new Date(f));
            var h = Employees.getInstance();
            h.init(), h.show(), s = setTimeout(function () {
                h.hide()
            }, 5e3), $(v).find("[data-id=" + d + "]").addClass("active"), setTimeout(function () {
                e.hideLoader(), e.hideOverflow(), e.expandHeader(), e.showBackButton(), $(t).removeClass("active"), $(v).addClass("prev"), $(w).removeClass("next prev").addClass("active"), BookingInfo.getInstance().show()
            }, 500)
        }

        function d() {
            console.log("Steps._goToTimeslotsError()")
        }

        function e() {
            var a = Widget.getInstance()
            ;a.showLoader(), a.setStep(2);
            var b = a.getApiUrl(), c = a.getApiData(), e = localStorage.getItem("selected-id"),
                h = a.getBookingSettings()["lead-time"], i = h / 24;
            i < 1 && (i = 0);
            var j = new Date;
            j.setDate(j.getDate() + i);
            var k = moment(new Date(j)).format("YYYY-MM-DD");
            localStorage.setItem("selected-date", j), $.ajax({
                type: "GET",
                url: b + "/search/availability?courseId=" + e,
                contentType: "application/vnd.terminapp.1+json",
                processData: !1,
                success: function (d) {
                    a.setAvailability(d.data), $.ajax({
                        type: "GET",
                        url: b + "/search/profiles/" + c.profileId + "/courses/" + e + "?date=" + k,
                        contentType: "application/vnd.terminapp.1+json",
                        processData: !1,
                        success: f,
                        error: g
                    })
                },
                error: d
            })
        }

        function f(a) {
            var b = Services.getInstance(), c = b.prepareData(a, "course"), d = localStorage.getItem("selected-id");
            Timeslots.getInstance().init(c, "course");
            var e = Widget.getInstance(),
                f = (e.getBookingSettings()["lead-time"], localStorage.getItem("selected-date")),
                g = Calendar.getInstance();
            g.init(), g.set(new Date(f)), $(v).find("[data-id=" + d + "]").addClass("active"), setTimeout(function () {
                e.hideLoader(), e.hideOverflow(), e.expandHeader(), e.showBackButton(), $(t).removeClass("active"), $(v).addClass("prev"), $(w).removeClass("next prev").addClass("active"), BookingInfo.getInstance().show()
            }, 500)
        }

        function g() {
            console.log("Steps._goToCourseTimeslotsError()")
        }

        function h() {
            var a = Widget.getInstance();
            a.showLoader();
            var b = BookingInfo.getInstance();
            if (b.hide(), a.getIsLoggedIn()) return localStorage.setItem("user-token", a.getIsLoggedIn()), $(t).removeClass("active"), $(w).addClass("prev"), void i();
            var c = Auth.getInstance();
            c.init(), a.setStep(3);
            var d = localStorage.getItem("selected-time");
            $(w).find('[data-time="' + d + '"]').addClass("active"), setTimeout(function () {
                a.hideLoader(), a.hideOverflow(), a.expandHeader(), a.showBackButton(), $(t).removeClass("active"), $(w).addClass("prev"), $(x).removeClass("next prev").addClass("active"), b.show(), c.setContentPosition()
            }, 500)
        }

        function i() {
            Auth.getInstance().hide(), BookingInfo.getInstance().hide(), setTimeout(function () {
                var a = Widget.getInstance();
                a.hideLoader(), a.showCloseButton(), Confirm.getInstance().init()
            }, 500)
        }

        function j() {
            var a = Widget.getInstance();
            a.showLoader();
            var b = a.getApiUrl(), c = localStorage.getItem("selected-type"), d = window.GuestBooking.getInstance();
            if ("course" === c && d.isActive()) {
                var e = d.getData();
                return void $.ajax({
                    type: "POST",
                    url: b + "/internal/guest-courses",
                    data: JSON.stringify({
                        "booking-id": localStorage.getItem("selected-id"),
                        customer: {
                            "first-name": e.firstName,
                            "last-name": e.lastName,
                            email: e.email,
                            "phone-number": e.phoneNumber,
                            "phone-country": e.phoneCountry
                        }
                    }),
                    contentType: "application/vnd.terminapp.1+json",
                    processData: !1,
                    success: k,
                    error: l
                })
            }
            if ("course" === c) return void $.ajax({
                type: "POST",
                url: b + "/internal/courses",
                beforeSend: function (a) {
                    a.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("user-token"))
                },
                data: JSON.stringify({"booking-id": localStorage.getItem("selected-id")}),
                contentType: "application/vnd.terminapp.1+json",
                processData: !1,
                success: k,
                error: l
            });
            if (d.isActive()) {
                var e = d.getData();
                return void $.ajax({
                    type: "POST",
                    url: "/guestbooking",
                    data: JSON.stringify({
                        data: {
                            firstName: e.firstName,
                            lastName: e.lastName,
                            email: e.email,
                            phoneNumber: e.phoneNumber,
                            phoneCountry: e.phoneCountry,
                            bookingTime: localStorage.getItem("selected-time"),
                            bookingDate: moment(new Date(localStorage.getItem("selected-date"))).format("YYYY-MM-DD"),
                            companyId: localStorage.getItem("selected-company-id"),
                            serviceId: localStorage.getItem("selected-id"),
                            calendarId: localStorage.getItem("selected-calendar-id")
                        }
                    }),
                    contentType: "application/vnd.terminapp.1+json",
                    processData: !1,
                    success: k,
                    error: l
                })
            }
            $.ajax({
                type: "POST",
                url: b + "/mobile/bookings",
                beforeSend: function (a) {
                    a.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("user-token"))
                },
                data: JSON.stringify({
                    data: {
                        "booking-time": localStorage.getItem("selected-time"),
                        "booking-date": moment(new Date(localStorage.getItem("selected-date"))).format("YYYY-MM-DD"),
                        links: {
                            company: {id: localStorage.getItem("selected-company-id")},
                            service: {id: localStorage.getItem("selected-id")},
                            calendar: {id: localStorage.getItem("selected-calendar-id")}
                        }
                    }
                }),
                contentType: "application/vnd.terminapp.1+json",
                processData: !1,
                success: k,
                error: l
            })
        }

        function k() {
            var a = Widget.getInstance(),
                b = moment(new Date(localStorage.getItem("selected-date"))).format("YYYY-MM-DD"),
                c = localStorage.getItem("selected-time"), d = parseInt(localStorage.getItem("selected-duration")),
                e = 0, f = d;
            d >= 60 && (e = parseInt(d / 60), f = d - 60 * e);
            var g = parseInt(c.split(":")[0]) + e, h = parseInt(c.split(":")[1]) + f;
            60 === h && (g += 1, h = 0);
            var i = g + ":" + h, j = {
                atc_privacy: "public",
                atc_date_start: b + " " + c + ":00",
                atc_date_end: b + " " + i + ":00",
                atc_timezone: a.getCompanySettings().timezone,
                atc_title: localStorage.getItem("selected-title"),
                atc_description: " ",
                atc_location: a.getCompanySettings().address
            };
            Success.getInstance().init(j), window.addtocalendar.load(), setTimeout(function () {
                a.hideLoader(), a.hideBackButton(), a.collapsHeader(), $(t).removeClass("active"), $(y).addClass("prev"), $(z).removeClass("next").addClass("active")
            }, 500)
        }

        function l(a) {
            var b = Widget.getInstance(), c = b.getTranslations();
            a && a.responseJSON && a.responseJSON.error && "Session expired or invalid." === a.responseJSON.error.message && $(".widget-modal-error-box span span").html("Session abgelaufen. <br>Bitte versuchen Sie es erneut."), a && a.responseJSON && a.responseJSON.errors && "alreadyBookedByThisAccount" === a.responseJSON.errors[0].code && $(".widget-modal-error-box span span").html(c.errors.course.alreadyIn);
            var b = Widget.getInstance();
            b.hideLoader(), b.showErrorBox()
        }

        function m() {
            var a = $(u).attr("id").split("-")[1];
            if (BookingInfo.getInstance().hide(), "2" === a) return void n();
            o()
        }

        function n() {
            var a = "#" + $(u).attr("id");
            $(t).removeClass("active"), $(v).removeClass("prev next").addClass("active"), $(a).addClass("next"), Services.getInstance().reset();
            var b = Widget.getInstance();
            b.setStep(1), b.hideBackButton(), b.collapsHeader(), Timeslots.deleteInstance(), Calendar.deleteInstance(), Employees.deleteInstance()
        }

        function o() {
            var a = "#" + $(u).attr("id");
            $(t).removeClass("active"), $(w).removeClass("prev next").addClass("active"), $(a).addClass("next"), Timeslots.getInstance().reset(), Widget.getInstance().setStep(2), setTimeout(function () {
                BookingInfo.getInstance().show()
            }, 250), Auth.deleteInstance()
        }

        function p() {
            return t
        }

        function q() {
            return v
        }

        function r() {
            return z
        }

        var s, t = ".widget-modal-step", u = ".widget-modal-step.active", v = "#step-1", w = "#step-2", x = "#step-3",
            y = "#step-6", z = "#step-7";
        return {
            getActive: a,
            goToTimeslots: b,
            goToCourseTimeslots: e,
            goToAuth: h,
            goToConfirm: i,
            goToSuccess: j,
            backward: m,
            backToServices: n,
            backToTimeslots: o,
            getContainerSelector: p,
            getStep1Selector: q,
            getStep7Selector: r
        }
    }

    var b;
    return {
        getInstance: function () {
            return b || (b = a()), b
        }
    }
}(), Success = function () {
    function a() {
        function a(a) {
            var b = Templates.step7(a);
            $("#step-7").remove(), $("#outlet").append(b), parent.window.postMessage("timify:widget:page:success", "*"), c()
        }

        function b() {
            var a = localStorage.getItem("user-token"), b = localStorage.getItem("i18n"), c = Widget.getInstance();
            c.showOverflow(), c.setStep(1), c.setIsLoggedIn(a), localStorage.clear(), localStorage.setItem("i18n", b), Services.getInstance().reset(), Employees.getInstance().reset();
            var d = Steps.getInstance();
            $(d.getContainerSelector()).removeClass("active"), $(d.getStep1Selector()).removeClass("prev next").addClass("active"), $(d.getStep7Selector()).addClass("next")
        }

        function c() {
            $(document).off("click", d), $(document).on("click", d, b)
        }

        var d = "#step-7 #widget-modal-newbooking-btn";
        return {init: a}
    }

    var b;
    return {
        getInstance: function () {
            return b || (b = a()), b
        }
    }
}(), Timeslots = function () {
    function a() {
        function a(a, b) {
            var c, d, e = Widget.getInstance(), f = !1;
            "service" !== b && "offer-service" !== b || (f = a.timeslots.length > 0, d = g(e.getAvailability()), a.nextAvailableSlots = d.nextAvailableSlots, c = Templates.step2_service(a)), "course" !== b && "offer-course" !== b || (f = a.length > 0, d = h(e.getAvailability()), a.nextAvailableSlots = d.nextAvailableSlots, c = Templates.step2_course(a)), localStorage.setItem("unavailable-slots", JSON.stringify(d.unavailableSlots)), $("#step-2").remove(), $("#outlet").append(c), f || 0 !== a.nextAvailableSlots.length || n(), s()
        }

        function b() {
            if (!$(this).data("booked")) {
                var a = localStorage.getItem("selected-type"), b = {}, c = Calendar.getInstance();
                localStorage.removeItem("selected-calendar-id"), localStorage.removeItem("selected-employee-id"), localStorage.removeItem("selected-employee-name"), localStorage.removeItem("selected-time"), localStorage.removeItem("selected-date-formated"), localStorage.removeItem("selected-available-slots"), "service" !== a && "offer-service" !== a || (b.employeeId = $(this).data("employee-id"), b.employeeName = $(this).data("employee-name"), b.calendarId = $(this).data("calendar-id"), b.time = $(this).data("time"), b.formatedDate = c.getValue(), localStorage.setItem("selected-calendar-id", b.calendarId), localStorage.setItem("selected-employee-id", b.employeeId), localStorage.setItem("selected-employee-name", b.employeeName), localStorage.setItem("selected-time", b.time), localStorage.setItem("selected-date-formated", b.formatedDate)), "course" !== a && "offer-course" !== a || (b.id = $(this).data("booking-id"), b.employeeName = $(this).data("employee-name"), b.availableSlots = $(this).data("available-slots"), b.time = $(this).data("time"), b.formatedDate = c.getValue(), localStorage.setItem("selected-id", b.id), localStorage.setItem("selected-employee-name", b.employeeName), localStorage.setItem("selected-available-slots", b.availableSlots), localStorage.setItem("selected-time", b.time), localStorage.setItem("selected-date-formated", b.formatedDate)), r()
            }
        }

        function c() {
            $(y).removeClass("active"), $(z).removeClass("active")
        }

        function d(a, b) {
            j(), n(), p();
            var c = localStorage.getItem("selected-type"), d = Widget.getInstance();
            d.showLoader(), clearTimeout(t), t = setTimeout(function () {
                "service" !== c && "offer-service" !== c || e(a, b, d), "course" !== c && "offer-course" !== c || f(a, d)
            }, 1e3)
        }

        function e(a, b, c) {
            void 0 !== b && null !== b || (b = "");
            var d = c.getApiUrl(), e = localStorage.getItem("selected-id"),
                f = moment(new Date(a)).format("YYYY-MM-DD"), h = d + "/search/employees?serviceId=" + e + "&date=" + f;
            b && (h = d + "/search/employees/" + b + "?date=" + f + "&serviceId=" + e), $.ajax({
                type: "GET",
                url: h,
                contentType: "application/vnd.terminapp.1+json",
                processData: !1,
                success: function (a) {
                    var d = a.data;
                    void 0 === a.data.length && (d = [], d.push(a.data));
                    var e = Services.getInstance(), f = e.prepareData(d, "service"), h = g(c.getAvailability(), b);
                    f.nextAvailableSlots = h.nextAvailableSlots, localStorage.setItem("unavailable-slots", JSON.stringify(h.unavailableSlots));
                    var j = Templates.step2_service_timeslots(f);
                    $(u).html(j), j = Templates.step2_next_available_days(f.nextAvailableSlots), $(A).html(j), i(), k(), 0 === f.timeslots.length && (0 === f.nextAvailableSlots.length ? n() : m(), o(), l()), c.hideLoader()
                },
                error: function () {
                    console.log("Timeslots.update service error section.")
                }
            })
        }

        function f(a, b) {
            var c = b.getApiUrl(), d = b.getApiData(), e = localStorage.getItem("selected-main-id"),
                f = moment(new Date(a)).format("YYYY-MM-DD");
            $.ajax({
                type: "GET",
                url: c + "/search/profiles/" + d.profileId + "/courses/" + e + "?date=" + f,
                contentType: "application/vnd.terminapp.1+json",
                processData: !1,
                success: function (a) {
                    var c = Services.getInstance(), d = c.prepareData(a, "course"), e = h(b.getAvailability());
                    d.nextAvailableSlots = e.nextAvailableSlots, localStorage.setItem("unavailable-slots", JSON.stringify(e.unavailableSlots));
                    var f = Templates.step2_course_timeslots(d);
                    $(v).html(f), f = Templates.step2_next_available_days(d.nextAvailableSlots), $(A).html(f), i(), k(), 0 === d.length && (0 === d.nextAvailableSlots.length ? n() : m(), o(), l()), b.hideLoader()
                },
                error: function () {
                    console.log("Timeslots.update curse error section.")
                }
            })
        }

        function g(a, b) {
            var c = Widget.getInstance(),
                d = "dddd, " + c.getCompanySettings().dateFormat.toUpperCase().replace("YY", "YYYY"),
                e = {unavailableSlots: [], nextAvailableSlots: []}, f = a;
            b && (f = [], f.push(_.find(a, {id: b})));
            var g = parseInt(moment(new Date(localStorage.getItem("selected-date"))).format("YYYYMMDD")), h = [];
            for (var i in f) if (f.hasOwnProperty(i)) {
                for (var j in f[i]["off-days"]) f[i]["off-days"].hasOwnProperty(j) && -1 === e.unavailableSlots.indexOf(f[i]["off-days"][j]) && e.unavailableSlots.push(f[i]["off-days"][j]);
                f[i]["on-days"].sort();
                for (var k in f[i]["on-days"]) if (f[i]["on-days"].hasOwnProperty(k)) {
                    var l = parseInt(moment(new Date(f[i]["on-days"][k])).format("YYYYMMDD"));
                    l >= g && -1 === h.indexOf(f[i]["on-days"][k]) && h.push(f[i]["on-days"][k])
                }
            }
            for (var m in f) if (f.hasOwnProperty(m)) for (var n in f[m]["on-days"]) if (f[m]["on-days"].hasOwnProperty(n)) {
                var o = e.unavailableSlots.indexOf(f[m]["on-days"][n]);
                o > -1 && e.unavailableSlots.splice(o, 1)
            }
            return h.sort(), h[0] && e.nextAvailableSlots.push({
                time: h[0],
                formattedTime: moment(new Date(h[0])).format(d)
            }), h[1] && e.nextAvailableSlots.push({
                time: h[1],
                formattedTime: moment(new Date(h[1])).format(d)
            }), h[2] && e.nextAvailableSlots.push({time: h[2], formattedTime: moment(new Date(h[2])).format(d)}), e
        }

        function h(a) {
            var b = Widget.getInstance(),
                c = "dddd, " + b.getCompanySettings().dateFormat.toUpperCase().replace("YY", "YYYY"),
                d = {unavailableSlots: [], nextAvailableSlots: []}, e = a[0],
                f = parseInt(moment(new Date(localStorage.getItem("selected-date"))).format("YYYYMMDD"));
            d.unavailableSlots = e["off-days"], d.unavailableSlots.sort(), e["on-days"].sort();
            for (var g in e["on-days"]) if (e["on-days"].hasOwnProperty(g)) {
                var h = parseInt(moment(new Date(e["on-days"][g])).format("YYYYMMDD"));
                h >= f && d.nextAvailableSlots.length < 3 && d.nextAvailableSlots.push({
                    time: e["on-days"][g],
                    formattedTime: moment(new Date(e["on-days"][g])).format(c)
                })
            }
            return d
        }

        function i() {
            $(u).fadeIn(200)
        }

        function j() {
            $(u).fadeOut(200)
        }

        function k() {
            $(w).find(".timeslots-on").fadeIn(100), $(w).find(".timeslots-off").hide()
        }

        function l() {
            $(w).find(".timeslots-on").hide(), $(w).find(".timeslots-off").fadeIn(100)
        }

        function m() {
            $(x).fadeIn(200)
        }

        function n() {
            $(x).fadeOut(200)
        }

        function o() {
            $(A).fadeIn(200)
        }

        function p() {
            $(A).fadeOut(200)
        }

        function q() {
            var a = $(this).data("date"), b = Calendar.getInstance();
            b.set(new Date(a)), b.update()
        }

        function r() {
            Steps.getInstance().goToAuth()
        }

        function s() {
            $(document).off("click", y), $(document).on("click", y, b), $(document).off("click", z), $(document).on("click", z, b), $(document).off("click", B), $(document).on("click", B, q)
        }

        var t, u = ".widget-modal-times-list", v = ".ta-course-timeslots", w = ".widget-modal-timeslots-title",
            x = "#no-times-message", y = ".widget-modal-times-list li", z = ".ta-course-timeslots li",
            A = "#next-available-days", B = "#next-available-days div";
        return {init: a, reset: c, update: d, show: i, hide: j, nextStep: r}
    }

    var b;
    return {
        getInstance: function () {
            return b || (b = a()), b
        }, deleteInstance: function () {
            b = null
        }
    }
}(), Forms = function () {
    function a() {
        function a(a) {
            $(j).each(function () {
                d(this)
            }), i()
        }

        function b() {
            $(this).closest(k).removeClass("success"), $(this).closest(k).addClass("in-progress")
        }

        function c() {
            d(this), $(".in-progress").removeClass("in-progress")
        }

        function d(a) {
            $(a).val() ? $(a).closest(k).addClass("success") : $(a).closest(k).removeClass("success")
        }

        function e(a) {
            a.stopPropagation(), $(this).closest(l).find(n).toggle()
        }

        function f() {
            $(n).hide()
        }

        function g(a) {
            a.stopPropagation();
            var b = $(this).data("country-code"), c = $(this).data("lang-code"), d = $(this).find("img").attr("src");
            $(this).closest(l).find('input[name="country-code"]').val(b), $(this).closest(l).find('input[name="country-text"]').val(c), $(this).closest(l).find(".country-selector span img").attr("src", d), $(this).closest(l).find(".country-code").text(b + " (0)"), f()
        }

        function h(a) {
            "a" !== a.target.tagName.toLowerCase() && $(this).find(".ta-checkbox").toggleClass("active")
        }

        function i() {
            $(document).off("focus", ".form-control"), $(document).on("focus", ".form-control", b), $(document).off("blur", ".form-control"), $(document).on("blur", ".form-control", c), $(document).off("click", m), $(document).on("click", m, e), $(document).off("click", o), $(document).on("click", o, g), $(document).off("click", "body"), $(document).on("click", "body", f), $(document).off("click", ".ta-checkbox-group"), $(document).on("click", ".ta-checkbox-group", h)
        }

        var j = ".form-control", k = ".form-group", l = ".form-phone", m = ".form-phone .country-selector span",
            n = ".country-selector ul", o = ".country-selector ul li";
        return {init: a}
    }

    var b;
    return {
        getInstance: function () {
            return b || (b = a()), b
        }
    }
}();