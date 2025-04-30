"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsItem, TabsList } from "@/components/ui/tabs"
import { Upload, Trash2 } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [processingStep, setProcessingStep] = useState<string | null>(null)
  const [enhancementMethod, setEnhancementMethod] = useState("autoenhancer")
  const [error, setError] = useState<string | null>(null)

  const sampleImages = [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWLT6Cuqt625h1mRWack28AUjqzghqkHwtWMW03L_1Rw&s&ec=72940542",
      label: "Sample 1"
    },
    {
      url: "https://live-production.wcms.abc-cdn.net.au/8b27fd4326ee4496922cf33cc059df30?impolicy=wcms_crop_resize&cropH=576&cropW=1024&xPos=0&yPos=0&width=862&height=485",
      label: "Sample 2"
    },
    {
      url: "https://www.exploratorium.edu/sites/default/files/DeepBlue_DSC_2266_H.jpg",
      label: "Sample 3"
    }
  ]

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null)
    const selectedFile = e.target.files?.[0]

    if (!selectedFile) return
    if (!selectedFile.type.startsWith("image/")) {
      setError("Please upload an image file")
      return
    }

    if (selectedFile.size > 10 * 1024 * 1024) {
      setError("File size should be less than 10MB")
      return
    }

    setFile(selectedFile)
    const reader = new FileReader()
    reader.onload = (e) => {
      setPreview(e.target?.result as string)
    }
    reader.readAsDataURL(selectedFile)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setError(null)

    const droppedFile = e.dataTransfer.files?.[0]
    if (!droppedFile) return
    if (!droppedFile.type.startsWith("image/")) {
      setError("Please upload an image file")
      return
    }

    if (droppedFile.size > 10 * 1024 * 1024) {
      setError("File size should be less than 10MB")
      return
    }

    setFile(droppedFile)
    const reader = new FileReader()
    reader.onload = (e) => {
      setPreview(e.target?.result as string)
    }
    reader.readAsDataURL(droppedFile)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleRemoveFile = () => {
    setFile(null)
    setPreview(null)
    setError(null)
  }

  const handleUpload = async () => {
    if (!file && !preview) return

    setUploading(true)
    setUploadProgress(0)

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 100)

    setTimeout(() => {
      setProcessingStep("Uploading image")
      setTimeout(() => {
        setProcessingStep("Applying enhancement")
        setTimeout(() => {
          setProcessingStep("Running object detection")
          setTimeout(() => {
            setProcessingStep("Analyzing results")
            setTimeout(() => {
              clearInterval(interval)
              setUploading(false)
              setUploadProgress(100)
              setProcessingStep(null)
              window.location.href = "/results/sample"
            }, 1000)
          }, 1000)
        }, 1000)
      }, 1000)
    }, 500)
  }

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col space-y-4 text-center mb-8">
          <h1 className="text-3xl font-bold">Upload Underwater Image</h1>
          <p className="text-gray-500">
            Upload your underwater image to enhance it and detect objects using our advanced AI models
          </p>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Card className="mb-8">
          <CardContent className="p-6">
            <Tabs defaultValue="upload" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsItem value="upload">Upload Image</TabsItem>
                <TabsItem value="sample">Use Sample Image</TabsItem>
              </TabsList>
              <TabsContent value="upload">
                {!preview ? (
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onClick={() => document.getElementById("file-upload")?.click()}
                  >
                    <input
                      id="file-upload"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    <div className="mx-auto w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <Upload className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Upload your underwater image</h3>
                    <p className="text-gray-500 mb-4">Drag and drop or click to select</p>
                    <Button variant="outline">Select Image</Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="relative rounded-lg overflow-hidden border border-gray-200">
                      <img
                        src={preview || "/placeholder.svg"}
                        alt="Preview"
                        className="w-full object-contain max-h-[400px]"
                      />
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={handleRemoveFile}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500">
                        {file?.name || "Sample image"} {file ? `(${Math.round(file?.size / 1024)} KB)` : ""}
                      </p>
                    </div>
                  </div>
                )}
              </TabsContent>
              <TabsContent value="sample">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {sampleImages.map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-video rounded-lg overflow-hidden border border-gray-200 cursor-pointer hover:border-blue-500 transition-colors"
                      onClick={() => {
                        setPreview(img.url)
                        setFile(null)
                      }}
                    >
                      <img src={img.url} alt={img.label} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity">
                        <Button variant="secondary" size="sm">
                          Select
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {preview && (
          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4"></h3>
              <div className="space-y-4">
                <div>
                  <Label className="text-base"></Label>
                </div>
                <div className="pt-4">
                  <Button className="w-full" size="lg" onClick={handleUpload} disabled={uploading || !preview}>
                    {uploading ? "Processing..." : "Enhance & Detect Objects"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {uploading && (
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Processing</h3>
              <Progress value={uploadProgress} className="h-2 mb-2" />
              <p className="text-sm text-gray-500">{processingStep || "Preparing..."}</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
