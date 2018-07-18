let Block = Quill.import('blots/block');
let Icon = Quill.import('ui/icons');

class Pullquote extends Block {

  static icon() {
    return '<svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M6 8V4c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v4c0 1-.3 2.5-1 4-.3 1.3-1.2 1.7-3 3l-2-2c1.7-1.5 2.5-2 2-4H7a1 1 0 0 1-1-1z" fill="#444" fill-rule="evenodd"/></svg>'
  }

}

Pullquote.blotName = 'pullquote';
Pullquote.tagName = 'ASIDE';
Pullquote.className = 'blog__pullquote';

Icon['pullquote'] = Pullquote.icon();

Quill.register('formats/pullquote', Pullquote);

