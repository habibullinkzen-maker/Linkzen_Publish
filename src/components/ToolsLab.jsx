import React, { useState } from 'react';
import { 
  FileText, Search, Grid, HelpCircle, AlertCircle, 
  ArrowRight, Sparkles, Filter 
} from 'lucide-react';
import ToolWorkspace from './ToolWorkspace';

// Define the 30 tools as metadata with theme properties
const toolsData = [
  { id: 'merge', name: 'Merge PDF', desc: 'Combine PDFs in the order you want with the easiest PDF merger available.', category: 'Organize', color: '#FF3F66' },
  { id: 'split', name: 'Split PDF', desc: 'Separate one page or a whole set for easy conversion into independent PDF files.', category: 'Organize', color: '#FF9F43' },
  { id: 'compress', name: 'Compress PDF', desc: 'Reduce file size while optimizing for maximal PDF quality.', category: 'Optimize', color: '#05F29B' },
  { id: 'pdf2word', name: 'PDF to Word', desc: 'Easily convert your PDF files into easy to edit DOC and DOCX documents.', category: 'Convert From', color: '#00A2FF' },
  { id: 'pdf2ppt', name: 'PDF to PowerPoint', desc: 'Turn your PDF files into easy to edit PPT and PPTX slideshows.', category: 'Convert From', color: '#E040FB' },
  { id: 'pdf2excel', name: 'PDF to Excel', desc: 'Pull data straight from PDFs into Excel spreadsheets in a few short seconds.', category: 'Convert From', color: '#4CAF50' },
  { id: 'word2pdf', name: 'Word to PDF', desc: 'Make DOC and DOCX files easy to read by converting them to PDF.', category: 'Convert To', color: '#00A2FF' },
  { id: 'ppt2pdf', name: 'PowerPoint to PDF', desc: 'Make PPT and PPTX slideshows easy to view by converting them to PDF.', category: 'Convert To', color: '#E040FB' },
  { id: 'excel2pdf', name: 'Excel to PDF', desc: 'Make EXCEL spreadsheets easy to read by converting them to PDF.', category: 'Convert To', color: '#4CAF50' },
  { id: 'edit', name: 'Edit PDF', desc: 'Add text, images, shapes or freehand annotations to a PDF document.', category: 'Edit', color: '#9B51E0' },
  { id: 'pdf2jpg', name: 'PDF to JPG', desc: 'Convert each PDF page into a JPG or extract all images contained in a PDF.', category: 'Convert From', color: '#FF9F43' },
  { id: 'jpg2pdf', name: 'JPG to PDF', desc: 'Convert JPG images to PDF in seconds. Easily adjust orientation and margins.', category: 'Convert To', color: '#FF3F66' },
  { id: 'sign', name: 'Sign PDF', desc: 'Sign yourself or request electronic signatures from others.', category: 'Edit', color: '#FF3F66' },
  { id: 'watermark', name: 'Watermark', desc: 'Stamp an image or text over your PDF in seconds. Choose typography and position.', category: 'Edit', color: '#E040FB' },
  { id: 'rotate', name: 'Rotate PDF', desc: 'Rotate your PDFs the way you need them. You can even rotate multiple PDFs at once!', category: 'Organize', color: '#FF9F43' },
  { id: 'html2pdf', name: 'HTML to PDF', desc: 'Convert webpages in HTML to PDF. Copy and paste the URL and convert it with a click.', category: 'Convert To', color: '#05F29B' },
  { id: 'unlock', name: 'Unlock PDF', desc: 'Remove PDF password security, giving you the freedom to use your PDFs.', category: 'Security', color: '#00A2FF' },
  { id: 'protect', name: 'Protect PDF', desc: 'Protect PDF files with a password. Encrypt PDF documents to prevent access.', category: 'Security', color: '#9B51E0' },
  { id: 'organize', name: 'Organize PDF', desc: 'Sort pages of your PDF file however you like. Delete pages or add pages.', category: 'Organize', color: '#FF3F66' },
  { id: 'pdf2pdfa', name: 'PDF to PDF/A', desc: 'Transform your PDF to PDF/A for long-term archiving conforming to ISO standards.', category: 'Security', color: '#00A2FF' },
  { id: 'repair', name: 'Repair PDF', desc: 'Repair a damaged PDF and recover data from corrupt PDF with our tool.', category: 'Optimize', color: '#FF3F66' },
  { id: 'pagenumbers', name: 'Page numbers', desc: 'Add page numbers into PDFs with ease. Choose positions and typography.', category: 'Organize', color: '#FF9F43' },
  { id: 'scan', name: 'Scan to PDF', desc: 'Capture document scans from your mobile device and send them instantly.', category: 'Convert To', color: '#05F29B' },
  { id: 'ocr', name: 'OCR PDF', desc: 'Easily convert scanned PDF into searchable and selectable documents.', category: 'Optimize', color: '#4CAF50' },
  { id: 'compare', name: 'Compare PDF', desc: 'Show a side-by-side document comparison and spot changes between versions.', category: 'Security', color: '#9B51E0' },
  { id: 'redactpdf', name: 'Redact PDF', desc: 'Redact text and graphics to permanently remove sensitive information.', category: 'Security', color: '#000000' },
  { id: 'croppdf', name: 'Crop PDF', desc: 'Crop margins of PDF documents or select specific areas and apply changes.', category: 'Optimize', color: '#FF3F66' },
  { id: 'forms', name: 'PDF Forms', desc: 'Detect form fields automatically, create fillable PDFs, or fill PDF forms.', category: 'Edit', color: '#FF9F43' },
  { id: 'summarizer', name: 'AI Summarizer', desc: 'Quickly generate concise summaries from articles, essays, and text blocks.', category: 'AI Tools', color: '#00F2FE', isNew: true },
  { id: 'translate', name: 'Translate PDF', desc: 'Easily translate PDF files powered by AI. Keep fonts and layout intact.', category: 'AI Tools', color: '#9B51E0', isNew: true }
];

export default function ToolsLab({ onClose }) {
  const [selectedTool, setSelectedTool] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Organize', 'Convert From', 'Convert To', 'Optimize', 'Edit', 'Security', 'AI Tools'];

  const filteredTools = toolsData.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'All' || t.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  if (selectedTool) {
    return (
      <ToolWorkspace 
        tool={selectedTool} 
        onBack={() => setSelectedTool(null)} 
      />
    );
  }

  return (
    <section className="tools-hub-section" id="tools-hub">
      <div className="section-header text-center" style={{ position: 'relative' }}>
        {onClose && (
          <button onClick={onClose} className="close-tools-btn">
            Close Lab Tools
          </button>
        )}
        <span className="badge">R&D Lab Workspace</span>
        <h2>Scientific PDF & Document Utilities</h2>
        <p className="section-subtitle">
          Optimize, merge, edit, protect, and convert your documentation in our local research lab console. Supported by instant browser compilers.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="tools-filter-bar bg-glass">
        <div className="search-wrapper">
          <Search size={16} />
          <input 
            type="text" 
            placeholder="Search across 30 document tools..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filter-wrapper">
          <Filter size={14} className="text-muted" />
          <div className="filter-tags">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of 30 Tools */}
      <div className="tools-grid-layout">
        {filteredTools.map(tool => (
          <div 
            key={tool.id} 
            className="tool-card bg-glass"
            onClick={() => setSelectedTool(tool)}
            style={{ 
              '--hover-glow': tool.color, 
              cursor: 'pointer' 
            }}
          >
            <div className="tool-card-top">
              <div 
                className="tool-icon-frame" 
                style={{ background: `${tool.color}15`, color: tool.color, border: `1px solid ${tool.color}30` }}
              >
                <span className="tool-letter">{tool.name.charAt(0)}</span>
              </div>
              {tool.isNew && (
                <span className="badge-new">
                  <Sparkles size={10} /> NEW
                </span>
              )}
            </div>
            <div className="tool-card-body">
              <h4>{tool.name}</h4>
              <p>{tool.desc}</p>
            </div>
            <div className="tool-card-footer">
              <span className="category-tag">{tool.category}</span>
              <span className="action-arrow">
                Launch <ArrowRight size={14} />
              </span>
            </div>
          </div>
        ))}

        {filteredTools.length === 0 && (
          <div className="empty-tools-state text-center w-full bg-glass py-12">
            <AlertCircle size={32} className="text-muted mb-2" />
            <h4>No tools match your query</h4>
            <p className="text-muted text-small mt-1">Try resetting the tags filter or search keyword.</p>
          </div>
        )}
      </div>
    </section>
  );
}
