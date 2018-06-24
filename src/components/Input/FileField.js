import React from 'react'
import Dropzone from 'react-dropzone'

const FileField = (props) => (
  <Dropzone
    onDrop={upload => props.onChange(upload[0])}
    multiple={false}
    accept='image/*'
  >
    {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
      if (isDragActive) {
        return 'This file is authorized';
      }
      if (isDragReject) {
        return 'This file is not authorized';
      }

      return acceptedFiles.length || rejectedFiles.length
        ? `Accepted ${acceptedFiles[0].name} file, rejected ${rejectedFiles.length} files`
        : 'Try dropping some files.';
    }}
  </Dropzone>
)

export default FileField
