import { Marp } from "@marp-team/marp-core";

const MermaidPlugin = (md: any) => {
    const orig = md.renderer.rules.fence || ((tokens: any[], idx: number, opts: any, env: any, self: any) =>
        self.renderToken(tokens, idx, opts));

    md.renderer.rules.fence = (tokens: any[], idx: number, opts: any, env: any, self: any) => {
        const token = tokens[idx];
        if (token.info && token.info.trim() === 'mermaid') {
            let wholeContent = token.content.trim()
            // You can add cool code here to alter the mermaid before it is rendered
            // Adjust the wholeContent variable to your hearts desire
            console.log('Rendering mermaid with content:\n', wholeContent);
            return `<div class="mermaid">${wholeContent}</div>`;
        }
        return orig(tokens, idx, opts, env, self);
    };
};

export default (opts: any) => new Marp(opts).use(MermaidPlugin);
