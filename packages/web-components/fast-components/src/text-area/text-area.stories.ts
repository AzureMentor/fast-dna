import { FASTDesignSystemProvider } from "../design-system-provider";
import TextAreaTemplate from "./fixtures/text-area.html";
import { FASTTextArea } from ".";

// Prevent tree-shaking
FASTTextArea;
FASTDesignSystemProvider;

export default {
    title: "Text area",
};

export const TextField = () => TextAreaTemplate;
