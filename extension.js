/*
 * Copyright (C) 2012, 2013 Jamie Nicol <jamie@thenicols.net>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, see <http://www.gnu.org/licenses/>.
 */

const Main = imports.ui.main;

let thumbnailsSlider;
let savedFunc;

function init() {
    if (Main.overview._controls) {
        // GNOME <= 3.34
        thumbnailsSlider = Main.overview._controls._thumbnailsSlider;
    } else {
        // GNOME >= 3.36
        thumbnailsSlider = Main.overview._overview._controls._thumbnailsSlider
    }
}

function enable() {
    savedFunc = thumbnailsSlider._getAlwaysZoomOut;

    thumbnailsSlider._getAlwaysZoomOut = function() {
        return true;
    };
}

function disable() {
    thumbnailsSlider._getAlwaysZoomOut = savedFunc;
}
