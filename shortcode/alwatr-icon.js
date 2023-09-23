const {readFileSync} = require('node:fs');

async function loadIcon(iconName) {
  const icon = readFileSync(`node_modules/@alwatr/icon/svg/${iconName}.svg`, 'utf8');
  return `
    <div class="box-content h-[1em] w-[1em] align-middle [contain:size_layout_paint_style] [&>svg]:block [&>svg]:h-full [&>svg]:w-full [&>svg]:fill-current [&>svg]:stroke-current">
      ${icon}
    </div>
  `;
}

module.exports = {loadIcon}
