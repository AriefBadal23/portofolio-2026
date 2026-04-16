import React, { Component } from "react";

export default class About extends Component {
    render() {
        return (
            <div className="mt-10 px-10" id="about">
                <h3 className="bg-[#0f172a] sticky top-0 text-2xl md:ml-150">
                    About me
                </h3>
                <div className="font-medium md:text-left md:ml-150 text-l md:text-wrap whitespace-normal leading-relaxed space-y-4">
                    <p>
                        I'm a last-year Computer Science student at Rotterdam University of
                        Applied Sciences, with a focus on backend and fullstack web
                        development with C#, ASP.NET Core and React/TypeScript.
                    </p>

                    <p>
                        I build things. I've worked on projects independently and in teams
                        — from APIs and frontends to CI/CD pipelines and AWS deployments.
                        Through my Cyber Security minor I developed an interest in writing
                        software with security in mind, and I actively work on applying
                        that in my own projects.
                    </p>

                    <p>
                        I take initiative, work independently and follow through on what I
                        start. I'm looking for a graduation internship where I can grow as
                        a backend or fullstack developer in a team that takes their craft
                        seriously.
                    </p>
                </div>
            </div>
        );
    }
}