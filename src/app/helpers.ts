import * as $ from "jquery";
declare var swal: any;

export class Helpers {
	static loadStyles(tag, src) {
		if (Array.isArray(src)) {
			$.each(src, function (k, s) {
				$(tag).append($('<link/>').attr('href', s).attr('rel', 'stylesheet').attr('type', 'text/css'));
			});
		} else {
			$(tag).append($('<link/>').attr('href', src).attr('rel', 'stylesheet').attr('type', 'text/css'));
		}
	}

	static unwrapTag(element) {
		$(element).removeAttr('appunwraptag').unwrap();
	}

	/**
	 * Set title markup
	 * @param title
	 */
	static setTitle(title) {
		$('.m-subheader__title').text(title);
	}

	/**
	 * Breadcrumbs markup
	 * @param breadcrumbs
	 */
	static setBreadcrumbs(breadcrumbs) {
		if (breadcrumbs) $('.m-subheader__title').addClass('m-subheader__title--separator');

		let ul = $('.m-subheader__breadcrumbs');

		if ($(ul).length === 0) {
			ul = $('<ul/>').addClass('m-subheader__breadcrumbs m-nav m-nav--inline')
				.append($('<li/>').addClass('m-nav__item')
					.append($('<a/>').addClass('m-nav__link m-nav__link--icon')
						.append($('<i/>').addClass('m-nav__link-icon la la-home'))));
		}

		$(ul).find('li:not(:first-child)').remove();
		$.each(breadcrumbs, function (k, v) {
			let li = $('<li/>').addClass('m-nav__item')
				.append($('<a/>').addClass('m-nav__link m-nav__link--icon').attr('routerLink', v.href).attr('title', v.title)
					.append($('<span/>').addClass('m-nav__link-text').text(v.text)));
			$(ul).append($('<li/>').addClass('m-nav__separator').text('-')).append(li);
		});
		$('.m-subheader .m-stack__item:first-child').append(ul);
	}

	static setLoading(enable) {
		let body = $('body');
		if (enable) {
			$(body).addClass('m-page--loading-non-block')
		} else {
			$(body).removeClass('m-page--loading-non-block')
		}
	}

	static bodyClass(strClass) {
		$('body').attr('class', strClass);
	}

	static setSpinner(enable, jqSelector, position?) {
    if(position !== 'left'){ position = 'right'; }

    let el = $(jqSelector);
    let elClass = 'm-loader m-loader--'+ position +' m-loader--light';

    (enable) ? el.addClass(elClass) : el.removeClass(elClass);

    setTimeout(() => console.log([enable, jqSelector, position, elClass, el.attr('class')]), 200);
	}

	static doConfirm(params) {
		params = params || {};
		var defaults = {
			title: 'Confirm',
			message: 'Are you sure?',
			cancelText: 'Cancel',
			acceptText: 'OK',
			onAccept: null,
			onCancel: null,
			closeOnConfirm: true,
			fade: true
		};
		var mParams = jQuery.extend({}, defaults, params);

		var html = "<div class=\"modal fade\" id='tbConfirmModal' tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header\" style=\"background-color: #f7f8fa;border-color: #f7f8fa\"><h5 class=\"modal-title\" style=\"color: #123466\" id=\"exampleModalLabel\"></h5><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></div><div class=\"modal-body\"></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-metal tbCancelBtn\" data-dismiss=\"modal\"></button><button type=\"button\"  class=\"btn btn-accent tbAcceptBtn\"></button></div></div></div></div>";

		$('#tbConfirmModal').remove();
		$('body').append(html);

		var $confirm = $('#tbConfirmModal');
		//title
		$confirm.find('.modal-header h3').html(mParams.title);
		//body
		$confirm.find('.modal-body').html(mParams.message);
		//cancel button
		$confirm.find('.btn.tbCancelBtn').text(mParams.cancelText);
		//accept button
		$confirm.find('.btn.tbAcceptBtn').text(mParams.acceptText);

		if (typeof mParams.onAccept === 'function') {
			$confirm.find('.tbAcceptBtn')
					.click(mParams.onAccept);
		}

		if (typeof mParams.onCancel === 'function') {
			$confirm.find('.tbCancelBtn').click(mParams.onCancel);
		}

		if (mParams.classOnAccept.length > 0) {
			$confirm.find('.tbAcceptBtn').addClass(mParams.classOnAccept);
		}

		if (mParams.dataID.length > 0) {
			$confirm.find('.tbAcceptBtn').attr('data-id', mParams.dataID);
		}

		if (mParams.closeOnConfirm) {
			$confirm.find('.tbAcceptBtn').attr('data-dismiss', 'modal');
		}

		if (mParams.fade) {
			$confirm.addClass('fade');
		}

		// $('#tbConfirmModal').modal('show');
		//  $confirm.modal('show');
	}

	static showConfirmBox(actionType) {
        swal({
            title: "Are you sure, you want to " + actionType+ "?",
            text: "",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal(actionType + " was successful", {
                        icon: "success",
                    });
                } else {
                    swal("Alright then, Nothing Happened");
                }
                return willDelete;
            });
	}


}