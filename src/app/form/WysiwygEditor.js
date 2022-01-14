import React, { Component } from "react";
import ComponentsSidebar from "../shared/ComponentsSidebar";
import { Editor } from "@tinymce/tinymce-react";
import ReactQuill from "react-quill";
import SimpleMDE from "react-simplemde-editor";
import "react-quill/dist/quill.snow.css";
import "easymde/dist/easymde.min.css";

export class WysiwygEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      QuillText: "",
      mdeValue: ""
    };
    this.handleQuillChange = this.handleQuillChange.bind(this);
  }

  handleQuillChange(value) {
    this.setState({ QuillText: value });
  }

  handleMdeChange = value => {
    this.setState({ mdeValue: value });
  };

  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <ComponentsSidebar />
          <div className="az-content-body pd-lg-l-40">
            <div className="az-content-breadcrumb">
              <span>Components</span>
              <span>Forms</span>
              <span>Form Editor</span>
            </div>
            <h2 className="az-content-title">Form Editor</h2>

            <div className="az-content-label mg-b-10">Tinymce Editor</div>
            <Editor
              initialValue="<p>This is the initial content of the editor</p>"
              init={{ height: 500 }}
            />

            <div className="az-content-label mg-b-10 mg-t-40">Quill Editor</div>
            <ReactQuill
              value={this.state.QuillText}
              onChange={this.handleQuillChange}
            />
            <div className="az-content-label mg-b-10 mg-t-40">
              SimpleMDE Editor
            </div>
            <SimpleMDE onChange={this.handleMdeChange} />
          </div>
        </div>
        {/* container */}
      </div>
    );
  }
}

export default WysiwygEditor;
