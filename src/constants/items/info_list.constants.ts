import { InfoI } from "../../types/info.types";

export const INFO_LIST: InfoI[] = [
    {
        title: "Employment History",
        list: [
            {
                title: "Deputy CTO, Nabn, Tehran",
                from: "December 2025",
                to: "Present",
                works: [
                  "Wrote the backend for a steel sheet cutting company with Nestjs to manage inventory and orders, with the main focus being the ability to autoplan cuts based on orders and inventory using AI to speed up the work of the engineers doing the planning and helping them make more efficient plans.",
                  "Created a video conferencing platform with recording, transcription, and an AI processing layer that extracts action items, summaries, and structural meeting notes.",
                  "Created an internal system and panel in Go allowing users to instantly spin up isolated containerized development environments (such as OpenCode and OpenDesign) accessible directly within the browser.",
                  "Orchestrated container networking, tooling stacks, and documentation services within Portainer and Docker-managed environments.",
                  "Configured virtual machines and local hosting environments for open-source AI models.",
                  "Built a rotating proxy pool in Go with concurrent health testing and configurable failover strategies for internal use.",
                  "Created an AI code review system for PRs using TypeScript, Trigger.dev, and Deep Agents (LangChain)."
                ],
            },
            {
                title: "Systems Programmer, Rayankar, Tehran",
                from: "November 2023",
                to: "March 2025",
                works: [
                    "Worked remotely",
                    "Developed a communication platform for an international telecommunications company using Angular",
                    "Wrote end-to-end (E2E) tests and create mock backend for our tests with Nestjs",
                    "Wrote a wrapper package for SIP.js to work in Blazor",
                    "Developed call features for a webapp written in Blazor",
                    "Implemented a WebRTC routing solution in Rust leveraging XDP for packet interception (layers 2-4) and a dynamic call registry via Unix sockets.",
                    "Created an API gateway using Rust to replace the AWS service that our company is using.",
                    "Taught internal Rust programming courses to company employees",
                    "Wrote a dynamic HID library for sending commands and receiving events from headsets connected to the device, using Rust and an SDK written in C# that communicates using FFI."
                ],
            },
            {
                title: "Front End Developer, HiWEB, Tehran",
                from: "January 2021",
                to: "September 2023",
                works: [
                    "Created a Website for the popular Football club Esteghlal F.C. using Angular and StencilJS.",
                    "Created a UI library using StencilJS so that company developers could use the components in both React and Angular.",
                    "Tasked to add features and update a travel registration website which was built using Angular.",
                    "Rebuilt the website of a major news site in Iran with Nextjs.",
                    "Created a React library named flawless-ui to speed up development and eliminate common errors for company projects and published to NPM",
                    "Managed and continued the development of a gym subscription web app.",
                    "Created the website for Farda Insurance using Nextjs, TypeScript and, Tailwind.",
                    "Created a panel for Dana Insurance using Nextjs, TypeScript, and Material UI.",
                    "Migrated the project to basic React with Vite in a way that the panel can be used for multiple insurance companies with completely different UIs but the same features and functionalities from the same source code.",
                    "Created a widget (white label) for buying cinema tickets using React, Tailwind and Rust.",
                    "Created a labelling website for labelling and annotating data for ML using React, WASM and Rust.",
                    "Created a PWA finance application with React, TypeScript, Vite and tailwind",
                ],
            },
            {
                title: "Online Support, SabaIdea, Tehran",
                from: "May 2020",
                to: "November 2020",
                works: [
                    "Was Online Support for Aparat Live, the most popular streaming service in Iran.",
                    "Worked from home due to COVID-19.",
                    "Worked from 6 PM to 12 AM on weekdays and handled user messages on weekends and holidays.",
                    "Studied web development in my free time.",
                    "Left the job to study Web Development full-time and find a job as a Web Developer.",
                ],
            },
            {
                title: "Freelance and Personal Projects",
                from: "November 2019",
                to: "Present",
                works: [
                    "Built a website for a Pistachio selling company using expressjs (2019)",
                    "Came up with a fast algorithm for searching words in text in a way that it could be used to check chat messages in gaming streaming websites using TypeScript (2021)",
                    "Integrated the algorithm for an API service in which companies and people could purchase API keys using Nestjs, MongoDB, and Redis (2021)",
                    "Built a research registration web app for Hormozgan University of Medical Sciences using Nestjs, MongoDB, Nextjs, and Material UI (2022)",
                    "Rewrote the text searching algorithm and service with Golang and gRPC (2022)",
                    "Developed the backend for a cross-platform parking finder app powered by Rust and MongoDB (2024)",
                    "Wrote bare-metal code using Rust without any library on Cortex-M4 (STM32F303VC) to fulfill an R&D requirement (2025)",
                    "Built an SMS Gateway in Rust featuring a custom message queue built from scratch and a worker system with automatic scaling, self-recovery from crashes, and graceful shutdown (2025)",
                    "Developing a custom runner systemd service to automate remote server service configurations, orchestration, end-to-end testing, and performance benchmarking and 2 cli tools for managing the runners using Rust (2026 - Present)"
                ],
            },
        ],
    },
    {
        title: "Internships",
        list: [
            {
                title: "Network Operations Center (NOC) Operator, HiWEB, Tehran",
                from: "June 2018",
                to: "September 2018",
                works: [
                    "Worked as an intern at the Network Operation Center or NOC and studied Network+ in the summer before going to university.",
                    "Also Worked as Customer support and sales representative for a couple of weeks before leaving for university",
                ],
            }
        ],
    },
    {
        title: "Education",
        list: [
            {
                title: "Computer Science, Islamic Azad University, Central Tehran Branch, Tehran",
                from: "",
                to: "",
                works: [],
            }
        ],
    },
]
