let Block = Quill.import('blots/block');
let Icon = Quill.import('ui/icons');
let header2Icon = require('!html-loader!quill/assets/icons/header-2.svg');
let header3Icon = require('!html-loader!quill/assets/icons/header-3.svg');
let header4Icon = require('!html-loader!quill/assets/icons/header-4.svg');

class Headline extends Block {

  static icon() {
    return header2Icon;
  }

}

Headline.blotName = 'headline';
Headline.tagName = 'H2';
Headline.className = 'blog__headline';

Icon['headline'] = Headline.icon();

Quill.register('formats/headline', Headline);





class Subheadline extends Block {
  static icon() {
    return header3Icon;
  }
}

Subheadline.blotName = 'subheadline';
Subheadline.tagName = 'H3';
Subheadline.className = 'blog__subheadline';

Icon['subheadline'] = Subheadline.icon();

Quill.register('formats/subheadline', Subheadline);






class Subsubheadline extends Block {
  static icon() {
    return header4Icon;
  }
}

Subsubheadline.blotName = 'subsubheadline';
Subsubheadline.tagName = 'H4';
Subsubheadline.className = 'blog__subsubheadline';

Icon['subsubheadline'] = Subsubheadline.icon();

Quill.register('formats/subsubheadline', Subsubheadline);


