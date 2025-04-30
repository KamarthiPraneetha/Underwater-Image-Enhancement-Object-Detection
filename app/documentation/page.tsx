import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function DocumentationPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col space-y-4 mb-8">
        <h1 className="text-3xl font-bold">Documentation</h1>
        <p className="text-gray-500">
          Learn about the underwater image enhancement and object detection system
        </p>
      </div>

      <div className="space-y-6">
        {/* Overview */}
        <Card id="overview">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-2">Overview</h2>
            <p className="text-gray-500 mb-4">
              Understanding the underwater image enhancement and object detection system
            </p>

            <p className="mb-4">
              This system is based on the research paper{" "}
              <strong>
                "Underwater Image Enhancement and Object Detection: Are Poor Object Detection Results on Enhanced
                Images Due to Missing Human Labels?" (WACV 2025)
              </strong>. The paper explores how poor image quality affects label quality and detection accuracy.
            </p>

            <p>
              Our system integrates image enhancement, object detection using YOLO-NAS, and a label correction
              mechanism to deliver high-precision underwater analysis.
            </p>

            <div className="mt-4 rounded-lg overflow-hidden border">
              <img
                src="https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41598-025-85961-9/MediaObjects/41598_2025_85961_Fig1_HTML.png"
                alt="Enhancement comparison"
                className="w-full"
              />
            </div>
          </CardContent>
        </Card>

        {/* Image Enhancement */}
        <Card id="enhancement">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-2">Image Enhancement</h2>
            <p className="text-gray-500 mb-4">Techniques used in the system</p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">AutoEnhancer</h3>
                <p className="text-gray-500">
                  A U-Net based model constructed through Neural Architecture Search with attention modules.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">TEBCF</h3>
                <p className="text-gray-500">
                  Fusion-based technique combining dehazing and color correction for underwater images.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">PCDE</h3>
                <p className="text-gray-500">
                  Utilizes dark channel priors and physical property estimation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">ACDC</h3>
                <p className="text-gray-500">
                  Employs a histogram-based image correction strategy.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Object Detection */}
        <Card id="detection">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-2">Object Detection</h2>
            <p className="text-gray-500 mb-4">YOLO-NAS and dataset details</p>

            <p className="mb-4">
              The system utilizes YOLO-NAS, an advanced object detection model developed via Neural Architecture
              Search. It is fine-tuned on the RUOD dataset with 14,000 annotated underwater images across 10 classes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg overflow-hidden border">
                <img
                  src="https://doimages.nyc3.cdn.digitaloceanspaces.com/010AI-ML/content/images/2024/07/YOLO-NAS-l-Architecture-2.png"
                  alt="YOLO-NAS architecture"
                  className="w-full"
                />
                <div className="p-3 bg-gray-50">
                  <h4 className="font-medium text-sm">YOLO-NAS Architecture</h4>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden border">
                <img
                  src="https://ietresearch.onlinelibrary.wiley.com/cms/asset/f64c4a2f-a83f-46fe-8bd3-06c099cb3670/ipr213112-fig-0001-m.jpg"
                  alt="Detection examples"
                  className="w-full"
                />
                <img
                  src="https://www.mdpi.com/jmse/jmse-12-00116/article_deploy/html/images/jmse-12-00116-g008a-550.jpg"
                  alt="Detection examples"
                  className="w-full"
                />
                <div className="p-3 bg-gray-50">
                  <h4 className="font-medium text-sm">Detection Examples</h4>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Label Correction */}
        <Card id="labels">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-2">Label Correction</h2>
            <p className="text-gray-500 mb-4">Strategies to improve annotation quality</p>

            <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4">
              <li>Enhance images with various methods</li>
              <li>Re-annotate to find missed objects</li>
              <li>Compare new vs old labels</li>
              <li>Retrain detector with corrected labels</li>
            </ol>

            <p className="text-gray-500">
              Improved labels resulted in a mean increase of 9 annotations per image and a 5% boost in precision on the
              RUOD dataset.
            </p>

            <div className="rounded-lg overflow-hidden border mt-4">
              <img
                src="https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41467-022-28818-3/MediaObjects/41467_2022_28818_Fig1_HTML.png"
                alt="Label correction"
                className="w-full"
              />
            </div>
          </CardContent>
        </Card>

        {/* Evaluation Metrics */}
        <Card id="metrics">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-2">Evaluation Metrics</h2>
            <p className="text-gray-500 mb-4">Metrics for evaluating performance</p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Object Detection</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    <strong>mAP@0.5:</strong> Mean Average Precision at IoU 0.5
                  </li>
                  <li>
                    <strong>mAP@0.5:0.95:</strong> Mean over multiple IoU thresholds
                  </li>
                  <li>
                    <strong>Precision:</strong> TP / (TP + FP)
                  </li>
                  <li>
                    <strong>Recall:</strong> TP / (TP + FN)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium">Image Quality</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    <strong>UCIQE:</strong> A reference-free image quality score specific to underwater scenes
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* API Reference */}
        <Card id="api">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-2">API Reference</h2>
            <p className="text-gray-500 mb-4">API endpoints for interacting with the system</p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Image Enhancement</h3>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="font-mono text-sm">POST /api/enhance</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Enhance an underwater image using the specified method.
                  </p>
                  <ul className="list-disc list-inside text-sm mt-2 text-gray-700">
                    <li>
                      <strong>image:</strong> The uploaded image
                    </li>
                    <li>
                      <strong>method:</strong> autoenhancer | tebcf | pcde | acdc
                    </li>
                  </ul>
                </div>
              </div>
              {/* Add more API endpoints here if needed */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
