/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* globals document, console:false */

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import ArticlePluginSet from '@ckeditor/ckeditor5-core/tests/_utils/articlepluginset.js';

ClassicEditor
	.create( document.querySelector( '#editor' ), {
		image: { toolbar: [ 'toggleImageCaption', 'imageTextAlternative' ] },
		plugins: [ ArticlePluginSet ],
		toolbar: [ 'heading' ]
	} )
	.catch( err => console.error( err.stack ) );
