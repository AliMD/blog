const {readFileSync} = require('node:fs');

async function loadIcon(iconName, customClass) {
  const icon = readFileSync(`node_modules/@alwatr/icon/svg/${iconName}.svg`, 'utf8');
  const customClassList = customClass?.split(' ').map((className) => {
    return `!${className}`;
  }
  ).join(' ') || '';

  return `
    <div class="inline-block box-content h-[1em] w-[1em] align-middle [contain:size_layout_paint_style] [&>svg]:block [&>svg]:h-full [&>svg]:w-full [&>svg]:fill-current [&>svg]:stroke-current ${customClassList}">
      ${icon}
    </div>
  `;
}

module.exports = {loadIcon}
