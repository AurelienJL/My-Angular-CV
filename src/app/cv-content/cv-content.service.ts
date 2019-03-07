import { presentationData, skillsData, formationData, projectsData, menuItems, ContactData } from './cv-content.data';
import { CvElement } from './cv-element';


export class CvContentService {

    getMenuItems() {
        return menuItems;
    }

    getPresentationData() {
        return presentationData;
    }

    getSkillsData(): Promise<CvElement[]> {
        return Promise.resolve(skillsData);
    }

    getFormationData(): Promise<CvElement[]> {
        return Promise.resolve(formationData);
    }

    getProjectData(): Promise<CvElement[]> {
        return Promise.resolve(projectsData);
    }

    getContactData() {
        return ContactData;
    }
}