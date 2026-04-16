import React, { Component } from "react";

export interface IProjectProps {
  title: string;
  url?: string;
  description: string;
  tools: string[];
  image: string;
}
interface IProjectState {}

export default class Project extends Component<IProjectProps> {
  constructor(props: IProjectProps) {
    super(props);
  }

  render() {
    return (
      <>
        <p className="text-xl mt-3 mb-3 font-bold">{this.props.title}</p>
        <div className="w-full h-fit flex">
          <div className="flex-row mb-10 flex items-center space-x-4">
            <div className="flex flex-col shrink-0">
              <img
                  className="hidden md:block"
                  height={300}
                  width={300}
                  src={this.props.image}
                  alt="project-1"
              />
              {this.props.url && (
                 <a href={this.props.url}>See GitHub</a>
                  
              )}
            </div>
            <div>
              
              <p className="text-l">{this.props.description}</p>
              <div className="flex flex-wrap gap 2 rounded-xl text-center h-fit mt-1 m-2 space-x-2">
                {this.props.tools.map((tool) => (
                  <p className="bg-[#112B3A] text-[#59DFCB] rounded-2xl w-fit pl-2 pr-2 mt-1 ">
                    {tool}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
