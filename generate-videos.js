// const { createCanvas, loadImage } = require('canvas');
// const ffmpeg = require('fluent-ffmpeg');
// const fs = require('fs');
// const path = require('path');

// // Define programs data (same as in your React component)
// const programs = [
//   {
//     title: 'Food Security',
//     description: 'Ensuring communities have access to nutritious food through farming and nutrition programs.',
//     features: [
//       'Farmer field schools training',
//       'Urban horticulture and backyard gardening',
//       'Cooking demonstrations',
//       'Nutrition screening and assessment',
//     ],
//     baseVideo: 'videos/base/food-security.mp4',
//     outputVideo: 'public/videos/food-security.mp4',
//   },
//   {
//     title: 'Economic Empowerment',
//     description: 'Improving socioeconomic status through savings, loans, and business training.',
//     features: [
//       'Village savings and loans associations',
//       'Business planning and management training',
//       'Financial literacy programs',
//       'Apprenticeships and skill development',
//     ],
//     baseVideo: 'videos/base/economic-empowerment.mp4',
//     outputVideo: 'public/videos/economic-empowerment.mp4',
//   },
//   {
//     title: 'Health & Wellness',
//     description: 'Providing psychosocial support, HIV/AIDS awareness, and prevention services to young people.',
//     features: [
//       'Reached 150 YPLHIV through regional symposiums',
//       'Distributed 12,600 condoms',
//       'HIV/SGBV prevention training for 150 adolescent girls',
//       'HIV testing services for 915 people',
//     ],
//     baseVideo: 'videos/base/health-wellness.mp4',
//     outputVideo: 'public/videos/health-wellness.mp4',
//   },
//   {
//     title: 'Family Strengthening',
//     description: 'Empowering households with life skills, reproductive health services, and support for YPLHIV.',
//     features: [
//       'Life skills training for young people and caregivers',
//       'Home visits for terminally ill YPLHIV',
//       'Parenting skills for adolescent girls',
//       'Psycho-social support via counseling and activities',
//     ],
//     baseVideo: 'videos/base/family-strengthening.mp4',
//     outputVideo: 'public/videos/family-strengthening.mp4',
//   },
//   {
//     title: 'Child Protection & Youth Empowerment',
//     description: 'Strengthening safety nets and promoting youth leadership through community engagement.',
//     features: [
//       'Youth mentoring via dance, drama, and theater',
//       'Access to legal support and civil restitution',
//       'Mapping of child protection structures',
//       'Birth certificate registration',
//     ],
//     baseVideo: 'videos/base/child-protection.mp4',
//     outputVideo: 'public/videos/child-protection.mp4',
//   },
// ];

// // Canvas dimensions (match video resolution, e.g., 1280x720)
// const WIDTH = 1280;
// const HEIGHT = 720;

// // Animation settings
// const FPS = 30;
// const DURATION = 15; // 15 seconds
// const TOTAL_FRAMES = FPS * DURATION;

// async function generateVideo(program) {
//   const canvas = createCanvas(WIDTH, HEIGHT);
//   const ctx = canvas.getContext('2d');

//   // Create temporary directory for frames
//   const tempDir = path.join(__dirname, 'temp_frames');
//   if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

//   // Load base video (for simplicity, we'll assume it's pre-processed to match canvas size)
//   console.log(`Processing video for ${program.title}`);

//   for (let frame = 0; frame < TOTAL_FRAMES; frame++) {
//     // Clear canvas
//     ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'; // Semi-transparent overlay
//     ctx.fillRect(0, 0, WIDTH, HEIGHT);

//     // Animation progress (0 to 1)
//     const progress = frame / TOTAL_FRAMES;

//     // Animate title (slide in from right)
//     ctx.font = 'bold 60px Arial';
//     ctx.fillStyle = 'white';
//     ctx.textAlign = 'left';
//     const titleX = WIDTH - (WIDTH * progress * 2); // Slide from right to left
//     ctx.fillText(program.title, Math.max(50, titleX), 100);

//     // Animate description (fade in)
//     ctx.font = '30px Arial';
//     ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, progress * 2)})`; // Fade in
//     const descriptionLines = wrapText(ctx, program.description, WIDTH - 100);
//     descriptionLines.forEach((line, i) => {
//       ctx.fillText(line, 50, 180 + i * 40);
//     });

//     // Animate features (slide up)
//     ctx.font = '25px Arial';
//     program.features.forEach((feature, i) => {
//       const featureY = 350 + i * 40 - (progress * 200); // Slide up
//       ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, progress * 3 - i * 0.5)})`;
//       ctx.fillText(`• ${feature}`, 50, featureY);
//     });

//     // Save frame as PNG
//     const framePath = path.join(tempDir, `frame_${String(frame).padStart(4, '0')}.png`);
//     fs.writeFileSync(framePath, canvas.toBuffer('image/png'));
//   }

//   // Use ffmpeg to combine frames with base video
//   await new Promise((resolve, reject) => {
//     ffmpeg()
//       .input(program.baseVideo)
//       .input(path.join(tempDir, 'frame_%04d.png'))
//       .inputOption([`-r ${FPS}`])
//       .complexFilter([
//         '[0:v][1:v]overlay=0:0', // Overlay frames on base video
//       ])
//       .outputOptions([
//         '-c:v libx264',
//         '-pix_fmt yuv420p',
//         '-r 30',
//         '-t 15', // 15 seconds
//       ])
//       .output(program.outputVideo)
//       .on('end', () => {
//         console.log(`Generated ${program.outputVideo}`);
//         // Clean up frames
//         fs.readdirSync(tempDir).forEach((file) => fs.unlinkSync(path.join(tempDir, file)));
//         fs.rmdirSync(tempDir);
//         resolve();
//       })
//       .on('error', (err) => {
//         console.error(`Error generating ${program.outputVideo}:`, err);
//         reject(err);
//       })
//       .run();
//   });
// }

// // Helper function to wrap text
// function wrapText(ctx, text, maxWidth) {
//   const words = text.split(' ');
//   const lines = [];
//   let currentLine = words[0];

//   for (let i = 1; i < words.length; i++) {
//     const word = words[i];
//     const width = ctx.measureText(currentLine + ' ' + word).width;
//     if (width < maxWidth) {
//       currentLine += ' ' + word;
//     } else {
//       lines.push(currentLine);
//       currentLine = word;
//     }
//   }
//   lines.push(currentLine);
//   return lines;
// }

// // Ensure public/videos directory exists
// const outputDir = path.join(__dirname, 'public/videos');
// if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

// // Generate videos for all programs
// (async () => {
//   for (const program of programs) {
//     await generateVideo(program);
//   }
//   console.log('All videos generated successfully!');
// })();