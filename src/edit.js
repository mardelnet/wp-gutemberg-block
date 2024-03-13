import { __ } from '@wordpress/i18n';

import { useBlockProps, RichText, MediaPlaceholder, MediaReplaceFlow, BlockControls } from '@wordpress/block-editor';

import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
  const blockProps = useBlockProps();

  const onChangeTitle = ( newTitle ) => {
		setAttributes( { title: newTitle } )
	}
  
  const onChangeContent = ( newContent ) => {
		setAttributes( { content: newContent } )
	}

  const setImageAttributes = (media) => {
    if (!media || !media.url) {
        setAttributes({
            imageUrl: null,
            imageId: null,
            imageAlt: null,
        });
        return;
    }
    setAttributes({
        imageUrl: media.url,
        imageId: media.id,
        imageAlt: media?.alt,
    });
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${attributes.imageUrl})`,
    
  };

	return (
    <div {...useBlockProps()} className="press-note__item">
      
      <BlockControls>
        <MediaReplaceFlow
          mediaId={ attributes.imageId }
          mediaUrl={ attributes.imageUrl }
          allowedTypes={['image']}
          accept="image/*"
          onSelect={setImageAttributes}
          name={ !attributes.imageUrl ? __('Add Image') : __('Replace Image') }
        />
      </BlockControls>

      <MediaPlaceholder
        style={{ backgroundImage: `url(${attributes.imageUrl})` }}
        className='main-image'
        accept="image/*"
        allowedTypes={['image']}
        onSelect={setImageAttributes}
        multiple={false}
        handleUpload={true}
        labels={{
          'title': '',
          'instructions': '',
        }}
      />
    
      <RichText 
          { ...blockProps }
          tagName="h3"
          onChange={ onChangeTitle }
          allowedFormats={ [ 'core/bold', 'core/italic' ] }
          value={ attributes.title }
          placeholder={ __( 'Write the press note title...' ) }
        />

        <RichText 
          { ...blockProps }
          tagName="p"
          onChange={ onChangeContent }
          allowedFormats={ [ 'core/bold', 'core/italic' ] }
          value={ attributes.content }
          placeholder={ __( 'Write your press note content...' ) }
        />
    </div>
	);
}
