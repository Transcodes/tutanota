"use strict";

goog.provide('tutao.crypto.CryptoException');

/**
 * A crypto exception is thrown whenever an encryption/decryption or conversion of keys fails.
 * @param {string} message An information about the exception.
 * @param {Error=} error The original error that was thrown.
 * @constructor
 */
tutao.crypto.CryptoException = function(message, error) {
	this.stack = new Error().stack;
	if (!error) {
		this.message = message;
	} else {
		this.message = message + ", original message: " + error.message;
	}
	this.name = "CryptoException";
	this.error = error;
};

tutao.inherit(tutao.crypto.CryptoException, Error);
