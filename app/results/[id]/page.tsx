"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsItem, TabsList } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download } from "lucide-react"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ResultsPage({ params }: { params: { id: string } }) {
  // Simulated detection results
  const detectionResults = {
    original: {
      mAP50: 0.72,
      mAP5095: 0.66,
      precision: 0.72,
      recall: 0.73,
      uciqe: 0.529,
      detections: [
        { id: 1, class: "starfish", confidence: 0.92, bbox: [120, 150, 80, 70] },
        { id: 2, class: "fish", confidence: 0.85, bbox: [300, 200, 100, 50] },
        { id: 3, class: "coral", confidence: 0.78, bbox: [400, 300, 120, 90] },
      ],
    },
    enhanced: {
      mAP50: 0.85,
      mAP5095: 0.72,
      precision: 0.77,
      recall: 0.82,
      uciqe: 0.591,
      detections: [
        { id: 1, class: "starfish", confidence: 0.96, bbox: [120, 150, 80, 70] },
        { id: 2, class: "fish", confidence: 0.91, bbox: [300, 200, 100, 50] },
        { id: 3, class: "coral", confidence: 0.88, bbox: [400, 300, 120, 90] },
        { id: 4, class: "holothurian", confidence: 0.82, bbox: [200, 250, 90, 60] },
        { id: 5, class: "echinus", confidence: 0.79, bbox: [500, 150, 70, 70] },
      ],
    },
  }

  return (
    <div className="container py-12">
      <div className="flex flex-col space-y-4 mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Analysis Results</h1>
          <Link href="/upload">
            <Button variant="outline">Process Another Image</Button>
          </Link>
        </div>
        <p className="text-gray-500">Detailed analysis of underwater image enhancement and object detection</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="col-span-1 lg:col-span-3">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Performance Metrics</h2>
            <Tabs defaultValue="metrics" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsItem value="metrics">Metrics</TabsItem>
                <TabsItem value="detections">Detections</TabsItem>
              </TabsList>

              <TabsContent value="metrics">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Metric</TableHead>
                      <TableHead>Original</TableHead>
                      <TableHead>Enhanced</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>mAP@0.5</TableCell>
                      <TableCell>{detectionResults.original.mAP50.toFixed(2)}</TableCell>
                      <TableCell>{detectionResults.enhanced.mAP50.toFixed(2)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>mAP@0.5:0.95</TableCell>
                      <TableCell>{detectionResults.original.mAP5095.toFixed(2)}</TableCell>
                      <TableCell>{detectionResults.enhanced.mAP5095.toFixed(2)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Precision</TableCell>
                      <TableCell>{detectionResults.original.precision.toFixed(2)}</TableCell>
                      <TableCell>{detectionResults.enhanced.precision.toFixed(2)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Recall</TableCell>
                      <TableCell>{detectionResults.original.recall.toFixed(2)}</TableCell>
                      <TableCell>{detectionResults.enhanced.recall.toFixed(2)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>UCIQE</TableCell>
                      <TableCell>{detectionResults.original.uciqe.toFixed(3)}</TableCell>
                      <TableCell>{detectionResults.enhanced.uciqe.toFixed(3)}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <div className="mt-4">
                  <h4 className="font-medium mb-2">Analysis</h4>
                  <p className="text-sm text-gray-500">
                    The enhanced image shows significant improvement in all metrics, with a 13% increase in mAP@0.5 and
                    a 9% increase in precision. This demonstrates the importance of image enhancement for underwater
                    object detection.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="detections">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Original Image Detections</h4>
                    <div className="max-h-[200px] overflow-y-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Class</TableHead>
                            <TableHead>Confidence</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {detectionResults.original.detections.map((detection) => (
                            <TableRow key={detection.id}>
                              <TableCell>{detection.class}</TableCell>
                              <TableCell>{(detection.confidence * 100).toFixed(1)}%</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Enhanced Image Detections</h4>
                    <div className="max-h-[200px] overflow-y-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Class</TableHead>
                            <TableHead>Confidence</TableHead>
                            <TableHead>Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {detectionResults.enhanced.detections.map((detection) => (
                            <TableRow key={detection.id}>
                              <TableCell>{detection.class}</TableCell>
                              <TableCell>{(detection.confidence * 100).toFixed(1)}%</TableCell>
                              <TableCell>
                                {detection.id > 3 ? (
                                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">New</Badge>
                                ) : (
                                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Improved</Badge>
                                )}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">Key Findings</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Missing Labels:</span> Original images had fewer labels compared to enhanced
              images, which revealed additional objects.
            </li>
            <li>
              <span className="font-medium">Detection Improvement:</span> Enhancement led to a 5 percentage point
              increase in precision during object detection.
            </li>
            <li>
              <span className="font-medium">Image Quality:</span> UCIQE score improved from 0.529 to 0.591, indicating
              better underwater image quality.
            </li>
            <li>
              <span className="font-medium">New Detections:</span> Enhanced images revealed 2 additional objects
              (holothurian and echinus) that were not detected in the original image.
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
