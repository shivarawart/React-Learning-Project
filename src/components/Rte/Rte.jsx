import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

export default function Rte({ name, control, label, defaultValue = "" }) {
  return (
    <div className='w-full'>
      {label && <label className=''>{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <Editor
            value={value}
            onEditorChange={onChange}
            init={{
              branding: false,
              height: 500,
              menubar: true,
              plugins: [
                'advlist',
                'autolink',
                'lists',
                'link',
                'image',
                'charmap',
                'print',
                'preview',
                'anchor',
                'searchreplace',
                'visualblocks',
                'code',
                'fullscreen',
                'insertdatetime',
                'media',
                'table',
                'help',
                'wordcount',
                'emoticons',
                'codesample',
                'directionality',
                'hr',
                'imagetools',
                'nonbreaking',
                'pagebreak',
                'paste',
                'quickbars',
                'save',
                'template',
                'toc',
                'autosave',
                'autoresize',
                'bbcode',
                'colorpicker',
                'contextmenu',
                'importcss',
                'legacyoutput',
                'noneditable',
                'tabfocus',
                'textcolor',
                'textpattern'
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor | ' +
                'alignleft aligncenter alignright alignjustify | ' +
                'bullist numlist outdent indent | removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
              
            }}
            onDeactivate={onChange}
          />
        )}
      />
    </div>
  );
}
