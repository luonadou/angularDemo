var gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	htmlmin = require("gulp-htmlmin"),
	uglify = require("gulp-uglify"),
	gutil = require('gutil'),
	concat = require('gulp-concat'),
	del = require('del'),
	replace = require('gulp-replace'),
	reveasy = require('gulp-rev-easy'),
	requirejs = require('requirejs'),
	webserver = require('gulp-webserver'); 
	
	