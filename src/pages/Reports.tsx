import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';

const Report: React.FC = () => {
  const [pdfs, setPdfs] = useState<File[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const pdfFiles = Array.from(files).filter(file => file.type === 'application/pdf');
      setPdfs(prev => [...prev, ...pdfFiles]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      {/* Back Button */}
      <div className="w-full max-w-6xl px-4 mb-6">
        <Link to="/about">
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            Back to About
          </Button>
        </Link>
      </div>

      {/* Header */}
      <header className="w-full max-w-6xl bg-green-600 text-white p-6 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold text-center">JNYPA Impact Reports</h1>
        <p className="text-lg text-center mt-2">
          Upload and view impact reports from the Jinja Network of Young People Living with HIV/AIDS
        </p>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-6xl space-y-8">
        {/* Upload Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Upload Report</h2>
          <div className="flex items-center space-x-4">
            <input
              type="file"
              accept="application/pdf"
              multiple
              onChange={handleFileUpload}
              className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-green-600 file:text-white file:hover:bg-green-700"
            />
            <Upload className="w-6 h-6 text-green-600" />
          </div>
        </section>

        {/* Reports Grid */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Available Reports</h2>
          {pdfs.length === 0 ? (
            <p className="text-gray-700">No reports uploaded yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pdfs.map((pdf, index) => (
                <Card key={`pdf-${index}`} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <a
                      href={URL.createObjectURL(pdf)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-800 font-medium"
                    >
                      {pdf.name}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Uploaded: {new Date(pdf.lastModified).toLocaleDateString()}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-10 text-gray-600 text-center">
        <p>© 2025 JNYPA. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Report;