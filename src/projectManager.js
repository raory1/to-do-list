import { Project } from "./Project";

export const createProject = (name, todos) => {
    const newProject = new Project(name, todos);
    return newProject;
};

export const updateProject = () => {};

export const deleteProject = (id) => {};
