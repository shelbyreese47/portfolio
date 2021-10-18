import { Document } from 'react-pdf';
import React from 'react';

function resume(props) {
    return (
        <div>
            <Document
            file = ""
            onLoadSuccess = {this.onDocumentLoadSuccess}
            >
                Click here to download resume
            </Document>
        </div>
    );
}

export default resume;