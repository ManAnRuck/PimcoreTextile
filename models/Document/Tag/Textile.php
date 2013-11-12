<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Textile
 *
 * @author manuelruck
 */
class Document_Tag_Textile extends Document_Tag_Textarea {


    /**
     * @see Document_Tag_Interface::getType
     * @return string
     */
    public function getType() {
        return "textile";
    }

    /**
     * @see Document_Tag_Interface::frontend
     * @return string
     */
    public function frontend() {

        $options = $this->getOptions();

        $text = $this->text;
        if ($options["htmlspecialchars"] !== false) {
            $text = htmlspecialchars($this->text);
        }
        $parser = new Textile();
        $text = $parser->textileThis($text);
        return $text;
    }
}
