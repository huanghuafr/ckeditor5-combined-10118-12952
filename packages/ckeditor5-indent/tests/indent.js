/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* global document */

import ClassicTestEditor from '@ckeditor/ckeditor5-core/tests/_utils/classictesteditor.js';
import testUtils from '@ckeditor/ckeditor5-core/tests/_utils/utils.js';

import Indent from '../src/indent.js';
import IndentEditing from '../src/indentediting.js';
import IndentUI from '../src/indentui.js';

describe( 'Indent', () => {
	let editor, element;

	testUtils.createSinonSandbox();

	beforeEach( () => {
		element = document.createElement( 'div' );
		document.body.appendChild( element );

		return ClassicTestEditor
			.create( element, { plugins: [ Indent ] } )
			.then( newEditor => {
				editor = newEditor;
			} );
	} );

	afterEach( () => {
		element.remove();

		if ( editor ) {
			return editor.destroy();
		}
	} );

	it( 'should be named', () => {
		expect( Indent.pluginName ).to.equal( 'Indent' );
	} );

	it( 'should load the IndentUI plugin', () => {
		expect( editor.plugins.get( IndentUI ) ).to.be.instanceOf( IndentUI );
	} );

	it( 'should load the IndentEditing plugin', () => {
		expect( editor.plugins.get( IndentEditing ) ).to.be.instanceOf( IndentEditing );
	} );
} );
