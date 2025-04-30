# 🌊 Underwater Image Enhancement & Object Detection


A final-year research project implementing concepts from the WACV 2025 paper: **"Underwater Image Enhancement and Object Detection: Are Poor Object Detection Results On Enhanced Images Due to Missing Human Labels?"**

This web-based platform allows users to upload underwater images, enhance them using AI models like **AutoEnhancer**, and run **YOLO-NAS** object detection to analyze label quality, detection accuracy, and enhancement impact.


## 🚀 Live Demo

- 🔗 [View Website on Vercel](https://underwater-image-enhancement-and-object-detection.vercel.app/)
- 📁 [GitHub Repository](https://github.com/KamarthiPraneetha/Underwater-Image-Enhancement-Object-Detection)

## 📖 About This Project

This project investigates a critical research question in underwater computer vision: Does image enhancement actually improve object detection performance, or are discrepancies in results due to inconsistent human labeling across different image qualities?

The platform allows researchers and users to:

1. **Upload** raw underwater images
2. **Enhance** them using state-of-the-art AI models
3. **Detect** objects using YOLO-NAS
4. **Compare** detection results across original and enhanced images
5. **Analyze** differences in label quality and detection performance

## 🧰 Tech Stack

- **Frontend**: Next.js + TypeScript (TSX)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Enhancement Models**: 
  - AutoEnhancer (U-Net with NAS)
  - TEBCF
  - PCDE
  - UIEC
- **Object Detection**: YOLO-NAS (fine-tuned)
- **Dataset**: RUOD (Real-world Underwater Object Detection)
- **Evaluation Metrics**: Precision, Recall, mAP, UCIQE

## 🧠 Key Features

- 🌊 Upload and preview raw underwater images
- ✨ Enhance images using multiple enhancement models
- 🎯 Detect objects using YOLO-NAS
- 📈 Analyze performance: True Positives, False Positives, False Negatives
- 🖼️ Visualize bounding boxes and detections
- 📊 Compare label count differences after enhancement
- 🧪 Performance metrics comparison: original vs enhanced vs re-annotated
- 🤖 Model comparison dashboard



## 📊 Research Findings & Results

This project investigates key findings from the WACV 2025 research paper:

| Model | TP | FP | FN | Precision | Recall | mAP@0.5 | UCIQE |
|-------|----|----|----|-----------|---------|---------|----|
| Original | 3.95 | 1.50 | 1.49 | 72% | 73% | 0.85 | 0.529 |
| AutoEnhancer | 3.98 | 1.55 | 1.46 | 76% | 73% | 0.85 | 0.591 |
| Re-annotated | 4.21 | 1.32 | 1.22 | 78% | 77% | 0.88 | 0.591 |

Key observations:
- Enhanced images often reveal objects missed in original annotations
- Re-annotation after enhancement significantly improves detection metrics
- UCIQE image quality metrics correlate positively with detection performance

## 🧪 Running Locally

Make sure you have Node.js (v16+) and npm installed.

```bash
# Clone the repository

# Install dependencies
npm install

# Run the development server
npm run dev
```

Then visit `http://localhost:3000` in your browser.


## 📚 Installation & Dependencies


## 📑 Research Reference

This project implements concepts from:

Lucas, Evan, et al. (2025)  
"Underwater Image Enhancement and Object Detection: Are Poor Object Detection Results On Enhanced Images Due to Missing Human Labels?"  
Presented at WACV 2025  
[IResearch Link](https://openaccess.thecvf.com/content/WACV2025W/MaCVi/papers/Lucas_Underwater_Image_Enhancement_and_Object_Detection_Are_Poor_Object_Detection_WACVW_2025_paper.pdf)

## 📌 Future Improvements

- [ ] Add relabeling UI for human annotators to improve ground truth
- [ ] Integrate backend APIs for model inference
- [ ] Add export to PDF report functionality
- [ ] Support more enhancement models (GANs, histogram-based)
- [ ] Implement batch processing for multiple images
- [ ] Create Docker container for easier deployment

## 🙌 Acknowledgments

- Authors of the WACV 2025 paper
- YOLO-NAS team for open-source object detection
- RUOD Dataset creators
- Michigan Technological University & Fairfield University

## 👤 Author

**K Praneetha**
- 🎓 BTech CSE (ID: 21BCE2660)
- 📫 [Your Email](mailto:kamarthipraneetha2004@gmail.com)
- 💼 [LinkedIn Profile]([https://linkedin.com/in/your-profile](https://www.linkedin.com/in/praneetha-kamarthi-a28272290))
- 🌐 [Portfolio]([https://your-portfolio.com](https://kamarthipraneetha.github.io/my_portfolio/))

## 📜 License

This project is for educational and research purposes.

[MIT License](LICENSE)

Copyright (c) 2025 K Praneetha
