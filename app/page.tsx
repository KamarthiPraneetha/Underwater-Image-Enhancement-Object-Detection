import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Upload, Database, ImageIcon, Layers } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-800 to-blue-900 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl">
                  Underwater Image Enhancement & Object Detection
                </h1>
                <p className="max-w-[600px] text-gray-200 md:text-xl">
                  Advanced computer vision system for enhancing underwater imagery and detecting objects with improved
                  accuracy.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://pub.mdpi-res.com/applsci/applsci-14-01095/article_deploy/html/images/applsci-14-01095-g005b.png?1706611283"
                  alt="Underwater scene with enhanced visibility and object detection"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Key Features</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                Our system implements cutting-edge techniques from the latest research in underwater computer vision
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <ImageIcon className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold mb-2">Image Enhancement</h3>
                <p className="text-gray-500">
                  Multiple state-of-the-art enhancement techniques including AutoEnhancer, TEBCF, PCDE, and ACDC.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold mb-2">YOLO-NAS Detection</h3>
                <p className="text-gray-500">
                  Advanced object detection using YOLO-NAS architecture, pre-trained on COCO and fine-tuned for
                  underwater imagery.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold mb-2">Label Correction</h3>
                <p className="text-gray-500">
                  Innovative label correction strategies to address missing or noisy labels in enhanced underwater
                  images.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Try Our System</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                Upload your underwater images and see the enhancement and detection in action
              </p>
            </div>
            <div className="w-full max-w-sm">
              <Link href="/upload">
                <Button className="w-full" size="lg">
                  <Upload className="mr-2 h-5 w-5" /> Upload Image
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Research Background</h2>
                <p className="text-gray-500">
                  Based on the paper "Underwater Image Enhancement and Object Detection: Are Poor Object Detection
                  Results on Enhanced Images Due to Missing Human Labels?" (WACV 2025)
                </p>
                <ul className="space-y-2 text-gray-500 list-disc list-inside mt-4">
                  <li>Re-annotation of enhanced images shows a mean increase of 9 labels per image</li>
                  <li>5 percentage point increase in precision during object detection</li>
                  <li>Significant improvement in underwater image quality and visibility</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden border">
                <img
                  src="https://www.mdpi.com/electronics/electronics-12-03413/article_deploy/html/images/electronics-12-03413-g006-550.jpg"
                  alt="Research visualization"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
