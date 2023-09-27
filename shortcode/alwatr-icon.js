const {readFileSync} = require('node:fs');

async function loadIcon(iconName, customClass = 'h-[1em] w-[1em]') {
  const icon = readFileSync(`node_modules/@alwatr/icon-set-ionic/svg/${iconName}.svg`, 'utf8');
  return `
    <div class="inline-block box-content align-middle [contain:size_layout_paint_style] [&>svg]:block [&>svg]:h-full [&>svg]:w-full [&>svg]:fill-current [&>svg]:stroke-current ${customClass}">
      ${icon}
    </div>
  `;
}

module.exports = {loadIcon}
