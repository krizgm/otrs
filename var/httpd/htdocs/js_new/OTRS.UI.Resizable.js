// --
// OTRS.UI.Resizable.js - Resizable
// Copyright (C) 2001-2010 OTRS AG, http://otrs.org/\n";
// --
// $Id: OTRS.UI.Resizable.js,v 1.6 2010-05-07 13:33:29 mn Exp $
// --
// This software comes with ABSOLUTELY NO WARRANTY. For details, see
// the enclosed file COPYING for license information (AGPL). If you
// did not receive this file, see http://www.gnu.org/licenses/agpl.txt.
// --

"use strict";

var OTRS = OTRS || {};
OTRS.UI = OTRS.UI || {};

/**
 * @namespace
 * @exports TargetNS as OTRS.UI.Resizable
 * @description
 *      Contains the code for resizable elements.
 */
OTRS.UI.Resizable = (function (TargetNS) {
    /**
     * @function
     * @description
     *      This function initializes the resizability of the given element
     * @param {jQueryObject} $Element jQuery object of the element, which should be resizable
     * @return nothing
     */
    TargetNS.Init = function ($Element) {
        var ScrollerHeight = 140;

        if (isJQueryObject($Element) && $Element.length) {
            if ($Element.find("table").height() < ScrollerHeight) {
                $Element.find('.Scroller').height($Element.find("table").height());
            }

            $Element.resizable({
                handles: {
                    s: $Element.find('.Handle a')
                },
                minHeight: 50,
                maxHeight: $Element.find("table").height() + 10,
                resize: function    (event, ui) {
                    $Element.find("div.Scroller").height((ui.size.height - 10) + 'px').width(ui.size.width + 'px');
                }
            });
        }
    };

    return TargetNS;
}(OTRS.UI.Resizable || {}));